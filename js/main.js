//alert()

let user;
let pass;

//usuario = prompt ('Ingrese su Usuario')

//creo funcion para solicitar usuario guardarlo en variable y mostrarlo en alerta
function usuario() {
  user = prompt("Ingresar Usuario");
  alert("El usuario ingresado es " + user); //muestro el usuario
}

//Funcion para buscar el precio del producto (entre 3 productos)
function buscarp(letra) {
  switch (letra) {
    case "A":
      return 3500;
      break;
    case "B":
      return 4500;
      break;
    case "C":
      return 5500;
      break;
    default:
      0;
      break;
  }
}

//funcion para sumar montos de ambos items para el carrito
function sumar(primerItem, segundoItem) {
  return primerItem + segundoItem;
}

//llamo a la funcion usuario
usuario();

let i = 1;
if (user !== "richard") {
  //Si el usuario no es richard salgo con error
  alert("El Usuario Ingresado no Existe");
} else
  while (i <= 3) {
    pass = prompt("Ingrese su Password"); //Si el usuario es richard pido password
    if (pass === "valido") {
      //si es valido ingreso al sistema
      console.log("Ha ingresado correctamente al sistema");
      break;
    } else {
      alert("INCORRECTO, quedan" + " " + (3 - i) + " " + "Intentos"); //si es invalido x 3 veces salgo
      i = i + 1;
    }
  }

//Ingreso al sistema

//pido que indique el producto 1 y 2 a agregar al carrito
let letra1 = prompt("Ingrese Item 1 a Agregar al carrito").toUpperCase();
let letra2 = prompt("Ingrese Item 2 a Agregar al carrito").toUpperCase();

//asigno el valor de cada producto a una variable 
let item1 = buscarp(letra1);
let item2 = buscarp(letra2);

//muestro el total de ambos items
console.log("El monto del carrito es " + sumar(item1, item2));