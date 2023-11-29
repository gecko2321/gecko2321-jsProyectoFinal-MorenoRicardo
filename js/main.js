//alert()

// let user;
// let pass;

//usuario = prompt ('Ingrese su Usuario')

//creo funcion para solicitar usuario guardarlo en variable y mostrarlo en alerta
// function usuario() {
//   user = prompt("Ingresar Usuario");
//   alert("El usuario ingresado es " + user); //muestro el usuario
// }

// //Funcion para buscar el precio del producto (entre 3 productos)
// function buscarp(letra) {
//   switch (letra) {
//     case "A":
//       return 3500;
//       break;
//     case "B":
//       return 4500;
//       break;
//     case "C":
//       return 5500;
//       break;
//     default:
//       0;
//       break;
//   }
// }

// //funcion para sumar montos de ambos items para el carrito
// function sumar(primerItem, segundoItem) {
//   return primerItem + segundoItem;
// }

//llamo a la funcion usuario
// usuario();

// let i = 1;
// if (user !== "richard") {
//   //Si el usuario no es richard salgo con error
//   alert("El Usuario Ingresado no Existe");
// } else
//   while (i <= 3) {
//     pass = prompt("Ingrese su Password"); //Si el usuario es richard pido password
//     if (pass === "valido") {
//       //si es valido ingreso al sistema
//       console.log("Ha ingresado correctamente al sistema");
//       break;
//     } else {
//       alert("INCORRECTO, quedan" + " " + (3 - i) + " " + "Intentos"); //si es invalido x 3 veces salgo
//       i = i + 1;
//     }
//   }

//Ingreso al sistema

// //pido que indique el producto 1 y 2 a agregar al carrito
// let letra1 = prompt("Ingrese Item 1 a Agregar al carrito").toUpperCase();
// let letra2 = prompt("Ingrese Item 2 a Agregar al carrito").toUpperCase();

// //asigno el valor de cada producto a una variable
// let item1 = buscarp(letra1);
// let item2 = buscarp(letra2);

// //muestro el total de ambos items
// console.log("El monto del carrito es " + sumar(item1, item2));

let loginBtn = document.getElementById("loginPrd");
let buscarBtn = document.getElementById("buscarBtn");
let txtUsu = document.getElementById("txtUsu");
let txtPass = document.getElementById("txtPass");
//solicito Nombre de producto y precio
let nombre = document.getElementById("txtProd");
//let precio = document.getElementById("txtPrecio").value;

let busqueda = document.querySelector(".buscar");
busqueda.style.visibility = "hidden"; //oculto el cuadro de busqueda


let botones = document.querySelectorAll(".btn-animado")

//genero localstorage segun boton apretado
let botonApretado = e => { 
 let idboton = e.target.id.replace("b", "")
  localStorage.setItem("codigoProd",idboton)
  console.log(idboton)
}

//recorro botones de carrito
for (let boton of botones) {
  boton.addEventListener("click", botonApretado);
}

//variable para conteo de logins
let i = 3;

function login() {
  if (txtUsu.value !== "richard") {
    //Si el usuario no es richard salgo con error
    alert("El Usuario Ingresado no Existe");
  } else if (txtPass.value === "valido") {
    //si es valido ingreso al sistema
    console.log("Ha ingresado correctamente al sistema");
    busqueda.style.visibility = "visible"; //muestro el cuadro de busqueda si el logueo es correcto
  } else {
    i = i - 1;
    alert("INCORRECTO, quedan" + " " + i + " " + "Intentos");
  }

  txtUsu.value = ""; //borro valor de input
  txtPass.value = ""; //borro valor de input
  if (i < 1) {
    loginBtn.disabled = true;
  } //deshabilito boton despues de 3 intentos fallidos
}

loginBtn.addEventListener("click", login);

//Creo array de productos que se corresponden a los productos publicados en la pagina
const productos = [
  {
    id: 1,
    nombre: "Taza + Plato",
    descripcion: "Fabricados con ceramica multicolor",
    precio: 700,
  },
  {
    id: 2,
    nombre: "Panera",
    descripcion: "Gran capacidad y dureza",
    precio: 800,
  },
  {
    id: 3,
    nombre: "Compotera",
    descripcion: "Polifuncional, tinturas multicolor",
    precio: 650,
  },
  {
    id: 4,
    nombre: "Juego de Tazas",
    descripcion: "6 Tazas multicolor",
    precio: 1150,
  },
  {
    id: 5,
    nombre: "Combo Taza y recipiente",
    descripcion: "Taza + azucarera",
    precio: 850,
  },
  {
    id: 6,
    nombre: "Compotera alta",
    descripcion: "Compotera para altas temperaturas",
    precio: 1300,
  },
  {
    id: 7,
    nombre: "Taza + Plato Color Ocre",
    descripcion: "Ideal para desayunos",
    precio: 1000,
  },
  {
    id: 8,
    nombre: "Juego de Tazas + Plato",
    descripcion: "Juego de Tazas + Plato multicolores",
    precio: 1600,
  },
  {
    id: 9,
    nombre: "Tazon Sopero",
    descripcion: "Tazon Sopero de gran capacidad",
    precio: 1200,
  },
];

//funcion para recorrer el array
function mostrarProductos(productos) {
  productos.forEach((producto) =>
    console.log(
      producto.nombre + " - " + producto.descripcion + " - " + producto.precio
    )
  );
}

//funcion para filtrado segun input
function filtrarProductos() {
  const resultado = productos.filter(filtrarNombre);

  if (resultado.length > 0) {
    mostrarProductos(resultado);
  } else {
    alert("No hay coincidencia");
    txtProd.value = ""; //borro valor de input
  }
}

//funcion filtro por nombre
function filtrarNombre(producto) {
  if (nombre.value) {
    return producto.nombre === nombre.value;
  }
  return producto;
}



//ejecuto funcion
buscarBtn.addEventListener("click", filtrarProductos);
