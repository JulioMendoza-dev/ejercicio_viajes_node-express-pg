const express = require("express");
const cors = require("cors");
const pool = require("./database/db");
const { agregarViaje } = require("./viajes");
const { agregarEquipamiento } = require("./equipamiento");
const { obtener_viajes } = require("./obtener_viajes");
const { obtener_equipamiento } = require("./obtener_equipamiento");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("puerto 3000 corriendo en http://localhost:3000");
});

// GET: obtener viajes
app.get("/viajes", async (req, res) => {
  const viajes = await obtener_viajes();
  res.json(viajes);
});

// GET: obtener equipamiento
app.get("/equipamiento", async (req, res) => {
  const equipamiento = await obtener_equipamiento();
  res.json(equipamiento);
});


// POST: agregar viaje
app.post("/agregarViaje", async (req, res) => {
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




// delete: eliminar viaje
app.delete("/eliminarViaje/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM viajes WHERE id = $1", [id]);
  res.json({ mensaje: "Viaje eliminado correctamente" });
});

// delete: eliminar equipamiento
app.delete("/eliminarEquipamiento/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM equipamiento WHERE id = $1", [id]);
  res.json({ mensaje: "Equipamiento eliminado correctamente" });
});
