const pool  = require ('./database/db');

const modificarEquipamiento = async (id, nombre) => {
// Insertar un nuevo equipamiento en la base de datos, default cubre el id serial y
//$1 y $2 van en la consulta parametrizada para evitar inyeccion sql
 const consulta = "UPDATE equipamiento SET nombre = $1 WHERE id = $2"
 // Valores a insertar
 const values = [nombre , id]
 try {
    // Ejecutar la consulta, toda consunsulta sql pasa por pool.query
    const result = await pool.query(consulta, values)
    if (result.rowCount === 0) {
        throw new Error("equipamiento no encontrado ");
    }
    console.log(result);
    // Mostrar el resultado
    console.log("Equipamiento modificado correctamente");
 } catch (error) {
    console.error("Error al modificar el equipamiento:", error);
    throw error;    
 }
};

module.exports = modificarEquipamiento;