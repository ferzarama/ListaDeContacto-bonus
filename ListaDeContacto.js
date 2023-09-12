const listaDeContactos = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "3102577895",
    correo: "juan.perez@gmail.com",
    direccion: "Bogotá",
  },
  {
    nombre: "María",
    apellido: "González",
    telefono: "3236587458",
    correo: "maria.gonzalez@yahoo.com",
    direccion: "Pasto",
  },
  {
    nombre: "Carlos",
    apellido: "Rodríguez",
    telefono: "3132548755",
    correo: "carlos.rodriguez@hotmail.com",
    direccion: "Cali",
  },
  {
    nombre: "Pedro",
    apellido: "Peroni",
    telefono: "3125444785",
    correo: "movilventas@gmail.com",
    direccion: "Medellin",
  },
  {
    nombre: "Augusto",
    apellido: "Peroni",
    telefono: "3205877895",
    correo: "movilventas@gmail.com",
    direccion: "Medellin",
  },
];

function mostrarContacto(contacto) {
  console.log("Nombre: " + contacto.nombre);
  console.log("Apellido: " + contacto.apellido);
  console.log("Teléfono: " + contacto.telefono);
  console.log("Correo: " + contacto.correo);
  console.log("Dirección: " + contacto.direccion);
}

// Mostrar los cinco contactos
console.log("Datos de los cinco contactos:");

for (let i = 0; i < listaDeContactos.length; i++) {
  console.log("\nContacto " + (i + 1) + ":");
  mostrarContacto(listaDeContactos[i]);
}

// Crear una función para actualizar un contacto
function actualizarContacto(index, nuevoContacto) {
  if (index >= 0 && index < listaDeContactos.length) {
    listaDeContactos[index] = nuevoContacto;
    console.log("Contacto actualizado con éxito.");
  } else {
    console.log("Índice de contacto fuera de rango.");
  }
}

// Actualizar el tercer contacto (por ejemplo)
const nuevoTercerContacto = {
  nombre: "Laura",
  apellido: "Gómez",
  telefono: "3506987458",
  correo: "laura.gomez@movilventas.com",
  direccion: "Cartagena",
};

console.log("\nActualizando el tercer contacto:");
actualizarContacto(2, nuevoTercerContacto);

// Mostrar el tercer contacto actualizado
console.log("\nDatos del tercer contacto actualizado:");
mostrarContacto(listaDeContactos[2]);