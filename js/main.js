let busqueda = document.querySelector(".buscar");
busqueda.style.visibility = "hidden"; //oculto el cuadro de busqueda

//Cargo el archivo JSON con los productos para mostrar en la pagina de productos
fetch("../json/productos.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Hubo un problema en la carga del archivo");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => {
      const figureElement = document.getElementById(item.id);
      if (figureElement) {
        const imgElement = figureElement.querySelector("img");
        const figcaptionElement = figureElement.querySelector("figcaption");
        const divElement = figureElement.querySelector("div");
        const pElement = figureElement.querySelector("p");

        if (imgElement) {
          imgElement.src = item.src;
          imgElement.alt = item.alt;
        }

        if (figcaptionElement) {
          figcaptionElement.textContent = item.figcaption;
        }

        if (divElement) {
          divElement.textContent = item.div;
        }

        if (pElement) {
          pElement.textContent = item.p;
        }
      }
    });
  })
  .catch((error) => {
    console.error("Hubo un problema con la solicitud:", error);
  });

let loginBtn = document.getElementById("loginPrd");
let txtUsu = document.getElementById("txtUsu");
let txtPass = document.getElementById("txtPass");
let nombre = document.getElementById("txtProd");
let ingreso = document.querySelector(".ingreso");

//variable para conteo de logins
let i = 3;

function login() {
  if (txtUsu.value !== "richard") {
    //Si el usuario no es richard salgo con error
    Swal.fire({
      title: "El usuario no Existe",
      icon: "error",
    });
  } else if (txtPass.value === "valido") {
    //si es valido ingreso al sistema
    Swal.fire({
      title: "OK!",
      text: "Te has logueado correctamente!",
      icon: "success",
    });
    txtUsu.value = ""; //borro valor de input
    txtPass.value = ""; //borro valor de input
    busqueda.style.visibility = "visible"; //muestro el cuadro de busqueda si el logueo es correcto
    ingreso.style.visibility = "hidden"; //Oculto el div de Ingreso cuando se produce el ingreso correcto
  } else {
    i = i - 1;
    Swal.fire({
      title: "INCORRECTO, quedan" + " " + i + " " + "Intentos",
      icon: "error",
    });
  }

  txtUsu.value = ""; //borro valor de input
  txtPass.value = ""; //borro valor de input
  if (i < 1) {
    loginBtn.disabled = true;
  } //deshabilito boton despues de 3 intentos fallidos
}

loginBtn.addEventListener("click", login);

document.getElementById("buscarBtn").addEventListener("click", function () {
  const txtProd = document.getElementById("txtProd").value.toLowerCase(); // Obtener el texto ingresado y convertirlo a minúsculas

  fetch("../json/productos.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const resultados = data.filter((item) =>
        item.figcaption.toLowerCase().includes(txtProd)
      );
      // Resultados encontrados
      console.log("Resultados:", resultados);
    })
    .catch((error) => {
      console.error("Hubo un problema con la solicitud:", error);
    });
});

document.querySelectorAll(".btn-animado").forEach((btn) => {
  btn.addEventListener("click", function () {
    const figure = this.parentElement; // Obtiene el contenedor <figure> del botón clickeado
    const figcaption = figure.querySelector("figcaption").textContent; // Obtiene el texto de la <figcaption>
    const pText = figure.querySelector("p").textContent; // Obtiene el texto del <p>
    const pTextt = pText.replace("$", "");

    // Guarda en localStorage

    localStorage.setItem("Producto", figcaption);
    localStorage.setItem("Precio", pTextt);
    // Recupera el valor actual de la clave 'valor' del localStorage
    let total = localStorage.getItem("Total");

    // Convierte el valor actual a un número (si existe)
    total = total ? parseFloat(total) : 0;

    // Suma el nuevo valor al valor actual
    let suma = total + parseFloat(pTextt);

    //let suma = 0 + parseFloat(pTextt)
    localStorage.setItem("Total", suma);
  });
});
