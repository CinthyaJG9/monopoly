const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const { createConnection } = require('mysql2/promise');
const findUserByUsername = require('./database/querys/findUserByUserName');
const findUserById = require('./database/querys/findUserById');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');

app.prepare().then(async () => {
  const dbConnection = await createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cecyt9jigc',
    database: 'disney_monopoly',
  });

  const server = express();

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
      const user = await findUserByUsername(username, dbConnection);
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
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await findUserById(id, dbConnection);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  server.use(passport.initialize());
  server.use(passport.session());
  server.use(bodyParser.urlencoded({ extended: true }));

  // Ruta de inicio de sesión
  server.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  }));

  async function createUser(username, passwordHash) {
    try {
      const [result] = await dbConnection.query(
        'INSERT INTO MJugadores (user_jug, passwordhash_jug) VALUES (?, ?)',
        [username, passwordHash]
      );
      console.log('Usuario creado:', result);
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  }

  // Ruta de registro
server.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  // Crear un nuevo usuario en la base de datos
  await createUser(username, passwordHash);

  // Redirigir a la página de inicio de sesión después del registro exitoso
  res.redirect('/login');

});

  // Middleware para verificar si el usuario está autenticado
  const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');

  };

  server.get('/login', (req, res) => {
    res.render('login');
  });

  // Ruta del dashboard
  server.get('/dashboard', isAuthenticated, (req, res) => {
    res.send('Dashboard');
  });

  // Manejar todas las demás solicitudes con Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Función para iniciar el servidor
  const startServer = () => {
    console.log('> Ready on http://localhost:3000');
  };
  
  // Conectar a la base de datos
  dbConnection.connect()
    .then(() => {
      console.log('Conexión a la base de datos exitosa');
      server.listen(3000, startServer); // Iniciar el servidor después de la conexión exitosa
    })
    .catch((err) => {
      console.error('Error al conectar a la base de datos:', err);
    });
});
