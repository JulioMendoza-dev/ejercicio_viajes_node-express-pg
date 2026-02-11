const express = require("express");
const cors = require("cors");
const agregarViaje = require("./agregarViajes");
const agregarEquipamiento = require("./agregarEquipamiento");
const obtenerViajes = require("./obtenerViajes");
const obtenerEquipamiento = require("./obtenerEquipamiento");
const modificarPresupuesto = require("./modificarPresupuesto");
const modificarEquipamiento = require("./modificarEquipamiento");
const eliminarViaje = require("./eliminarViaje");
const eliminarEquipamiento =  require("./eliminarEquipamiento");


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("puerto 3000 corriendo en http://localhost:3000");
});
// GET: obtener viajes
app.get("/obtenerViajes", async (req, res) => {
  const viajes = await obtenerViajes();
  res.json(viajes);
});
// GET: obtener equipamiento
app.get("/obtenerEquipamiento", async (req, res) => {
  const equipamiento = await obtenerEquipamiento();
  res.json(equipamiento);
});
// POST: agregar viaje
app.post("/agregarViajes", async (req, res) => {
  const viaje = req.body;
  await agregarViaje(viaje.destino, viaje.presupuesto);
  res.json({ mensaje: "Viaje agregado correctamente" });
});
// POST: agregar equipamiento
app.post("/agregarEquipamiento", async (req, res) => {
  const equipamiento = req.body;
  await agregarEquipamiento(equipamiento.nombre);
  res.json({ mensaje: "Equipamiento agregado correctamente" });
});
// PUT: modificar presupuesto
app.put("/modificarPresupuesto/:id", async (req, res) => {
  const { id } = req.params;
  const { presupuesto } = req.body;
  try {
    await modificarPresupuesto(id, presupuesto);
    res.json({ mensaje: "Presupuesto modificado correctamente" });
  } catch (error) {
    res.send(error);
  }
});
//put: modificar equipamiento
app.put("/modificarEquipamiento/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    await modificarEquipamiento(id, nombre);
    res.json({ mensaje: "Equipamiento modificado correctamente" });
  } catch (error) {
    res.send(error);
  }
});
// delete: eliminar viaje
app.delete("/eliminarViaje/:id", async (req, res) => {
  const { id } = req.params;
  await eliminarViaje(id);
  res.json({ mensaje: "Viaje eliminado correctamente" });
});
// delete: eliminar equipamiento
app.delete("/eliminarEquipamiento/:id", async (req, res) => {
  const { id } = req.params;
  await eliminarEquipamiento(id);
  res.json({ mensaje: "Equipamiento eliminado correctamente" });
});
