const pool = require("./database/db");

// Funcion para obtener todos los viajes por consola
const obtener_viajes = async () => {
  // Consulta para obtener todos los viajes
  const consulta = "SELECT * FROM viajes";
  // Ejecutar la consulta
  const result = await pool.query(consulta);
  return result.rows;
};


module.exports =  obtener_viajes ;
