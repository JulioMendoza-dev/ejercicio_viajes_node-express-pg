const pool = require('./database/db');

const agregarEquipamiento = async (nombre) => {
// Insertar un nuevo equipamiento en la base de datos, default cubre el id serial y
//$1 va en la consulta parametrizada para evitar inyeccion sql
 const consulta = "INSERT INTO equipamiento values (DEFAULT, $1)"
 // Valores a insertar
 const values = [nombre]
 // Ejecutar la consulta, toda consunsulta sql pasa por pool.query
 const result = await pool.query(consulta, values)
 // Mostrar el resultado
 console.log("Equipamiento agregado", nombre);
}

module.exports =   agregarEquipamiento ;