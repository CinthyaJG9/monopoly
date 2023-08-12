CREATE DATABASE disney_monopoly;

USE disney_monopoly;

-- Tabla de Jugadores
CREATE TABLE MJugadores (
  id_jug INT AUTO_INCREMENT PRIMARY KEY,
  user_jug VARCHAR(50) NOT NULL,
  passwordhash_jug VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Propiedades
CREATE TABLE MPropiedades (
  id_pro INT AUTO_INCREMENT PRIMARY KEY,
  name_pro VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Jugadores Propietarios
CREATE TABLE EJugProp (
  id_jugprop INT AUTO_INCREMENT PRIMARY KEY,
  id_jug INT,
  id_pro INT,
  FOREIGN KEY (id_jug) REFERENCES MJugadores(id_jug),
  FOREIGN KEY (id_pro) REFERENCES MPropiedades(id_pro),
  UNIQUE(id_jug, id_pro)
);

-- Tabla de Transacciones
CREATE TABLE MTransacciones (
  id_tra INT AUTO_INCREMENT PRIMARY KEY,
  id_jug INT,
  id_pro INT,
  cantidad_tra INT NOT NULL,
  tipo_tra ENUM('compra', 'renta', 'comercio') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_jug) REFERENCES MJugadores(id_jug),
  FOREIGN KEY (id_pro) REFERENCES MPropiedades(id_pro)
);

-- Tabla de Partidas
CREATE TABLE CPartidas (
  id_par INT AUTO_INCREMENT PRIMARY KEY,
  inicio_par DATETIME NOT NULL,
  fin_par DATETIME,
  id_jug INT, 
  FOREIGN KEY (id_jug) REFERENCES MJugadores(id_jug) 
);
