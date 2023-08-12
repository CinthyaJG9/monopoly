const express = require('express');
const next = require('next');
const { createConnection } = require('mysql2'); // Importar createConnection

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');

app.prepare().then(() => {
  const server = express();

  // Configurar Express Session
  server.use(
    session({
      secret: 'secret-key',
      resave: false,
      saveUninitialized: false,
    })
  );

  // Configurar Passport
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await findUserByUsername(username);
      if (!user) {
        return done(null, false, { message: 'Usuario no encontrado' });
      }
      if (await bcrypt.compare(password, user.passwordHash)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Contraseña incorrecta' });
      }
    } catch (error) {
      return done(error);
    }
  }));

 passport.serializeUser((user, done) => {
  // Serialize the user ID to the session
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  // Deserialize the user ID from the session and fetch user details from the database
  try {
    const user = await findUserById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
  
  server.use(passport.initialize());
  server.use(passport.session());

  // Ruta de inicio de sesión
  server.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  }));

  // Ruta de registro
  server.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    
    // crear un nuevo usuario en la base de datos
    await createUser(username, passwordHash);
    
    res.redirect('/login');
  });
  
  // Middleware para verificar si el usuario está autenticado
  const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
  
  // Ruta protegida
  server.get('/dashboard', isAuthenticated, (req, res) => {
    res.send('Dashboard');
  });

  // Manejar todas las demás solicitudes con Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

    // Conexión a la base de datos
  const dbConnection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cecyt9jigc',
    database: 'disney_monopoly',
  });

  dbConnection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
    }
    console.log('Conexión a la base de datos exitosa');
  });

  // Iniciar el servidor
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});