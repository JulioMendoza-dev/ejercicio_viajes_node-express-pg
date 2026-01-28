const pool = require("./database/db");

const obtener_equipamiento = async () => {
  const consulta = "SELECT * FROM equipamiento";

  const result = await pool.query(consulta);
  return result.rows;
};
obtener_equipamiento();

module.exports = { obtener_equipamiento };
