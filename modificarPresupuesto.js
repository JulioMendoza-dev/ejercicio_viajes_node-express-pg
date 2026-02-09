const pool  = require ('./database/db');

const modificarPresupuesto = async (id, presupuesto) => {
// Insertar un nuevo viaje en la base de datos, default cubre el id serial y
//$1 y $2 van en la consulta parametrizada para evitar inyeccion sql
 const consulta = "UPDATE viajes SET presupuesto = $1 WHERE id = $2"
 // Valores a insertar
 const values = [presupuesto, id]
 try {
    // Ejecutar la consulta, toda consunsulta sql pasa por pool.query
    const result = await pool.query(consulta, values)
    if (result.rowCount === 0) {
        throw new Error("viaje no encontrado ");
    }
    console.log(result);
    // Mostrar el resultado
    console.log("Viaje modificado");
 } catch (error) {
    console.error("Error al modificar el viaje:", error);
    throw error;    
 }
};

module.exports = modificarPresupuesto;