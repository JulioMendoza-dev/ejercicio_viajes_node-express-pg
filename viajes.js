const pool  = require ('./database/db');

const agregarViaje = async (destino, presupuesto) => {
// Insertar un nuevo viaje en la base de datos, default cubre el id serial y
//$1 y $2 van en la consulta parametrizada para evitar inyeccion sql
 const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2)"
 // Valores a insertar
 const values = [destino, presupuesto]
 // Ejecutar la consulta, toda consunsulta sql pasa por pool.query
 const result = await pool.query(consulta, values)
 // Mostrar el resultado
 console.log("Viaje agregado")
}
// Exportar las funciones para usarlas en otros archivos
module.exports = {  agregarViaje };