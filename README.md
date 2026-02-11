# ejercicio_viajes_node-express-pg
ejercicio de acceso a bd con endpoints con frontend basico de pruebasen mismo proyecto

/*
 backend y frontend ya están funcionando, agregar **nuevos formularios en el HTML** es bastante sencillo: solo tienes que replicar la misma lógica que usaste para “Viajes” y “Equipamiento”, pero adaptada a las rutas que ya tienes en Express (`PUT` y `DELETE`).

---

## Ejemplo: Formularios extra

### 1. Formulario para **modificar equipamiento**
```html
<form id="formModificarEquipamiento">
  <h3>Modificar Equipamiento</h3>
  <input type="number" id="equipamientoId" placeholder="ID del equipamiento" />
  <input type="text" id="nuevoNombre" placeholder="Nuevo nombre" />
  <button id="btnModificarEquipamiento">Modificar</button>
</form>
```

### Script asociado
```js
const btnModificarEquipamiento = document.getElementById("btnModificarEquipamiento");
btnModificarEquipamiento.addEventListener("click", async (e) => {
  e.preventDefault();
  const id = document.getElementById("equipamientoId").value;
  const nombre = document.getElementById("nuevoNombre").value;

  await fetch(`http://localhost:3000/modificarEquipamiento/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre }),
  });

  render(); // refresca la lista
});
```

---

### 2. Formulario para **eliminar equipamiento**
```html
<form id="formEliminarEquipamiento">
  <h3>Eliminar Equipamiento</h3>
  <input type="number" id="equipamientoIdEliminar" placeholder="ID del equipamiento" />
  <button id="btnEliminarEquipamiento">Eliminar</button>
</form>
```

### Script asociado
```js
const btnEliminarEquipamiento = document.getElementById("btnEliminarEquipamiento");
btnEliminarEquipamiento.addEventListener("click", async (e) => {
  e.preventDefault();
  const id = document.getElementById("equipamientoIdEliminar").value;

  await fetch(`http://localhost:3000/eliminarEquipamiento/${id}`, {
    method: "DELETE",
  });

  render(); // refresca la lista
});
```

---

## Recomendación
- Haz lo mismo para **modificar/eliminar viajes**: cambia la URL a `/modificarPresupuesto/:id` o `/eliminarViaje/:id`.  
- Mantén la misma estructura: un formulario con inputs para ID y valores nuevos, y un botón que dispara el `fetch`.

---

✅ Con esto tu HTML tendrá formularios para **crear, modificar y eliminar** tanto viajes como equipamiento, todo conectado al backend.  

¿Quieres que te arme un **HTML completo ya integrado con todos los formularios (agregar, modificar, eliminar)** para que lo copies y pegues directamente en tu proyecto?

*/