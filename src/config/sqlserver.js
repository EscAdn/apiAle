// Conexion con la Base de Datos

const dbCredenciales = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  name: process.env.DB_NAME,
  server: process.env.SERVER,
};

module.exports = dbCredenciales;
