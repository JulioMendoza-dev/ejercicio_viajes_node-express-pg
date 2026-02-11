const pool = require("./database/db");

const obtenerEquipamiento = async () => {
  const consulta = "SELECT * FROM equipamiento";

  const result = await pool.query(consulta);
  return result.rows;
};

module.exports = obtenerEquipamiento ;