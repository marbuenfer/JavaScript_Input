window.onload = inicio;
const NOMBRECORRECTO = "MARICARMEN";

function inicio() {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `<input type="text" id="texto"><br> 
    <button>Aceptar </button>
    <div id="saludo"></div>`
  );

  var boton = document.querySelector("button");

  boton.onclick = function () {
    let nombre = document.querySelector("#texto").value;
    let nombreMayusculas = nombre.toUpperCase();
    let nombreFormateado =
      nombre.substr(0, 1).toUpperCase() + nombre.substr(1).toLowerCase();
    if (validar(nombreMayusculas)) {
      document.querySelector("#saludo").innerHTML = `Hola ${nombreFormateado} 
      <button id="boton" >Ir a la web</button>`;
      document.querySelector("#boton").onclick = () => {
        location.href =
          "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?orientacion#space";
      };
    } else {
      alert("El nombre no coincide");
      document.querySelector("#saludo").innerHTML = "";
      document.querySelector("#texto").value = "";
      document.querySelector("#texto").focus();
    }
  };
}
function validar(nombreMayusculas) {
  //si nombre coincide con NOMBRECORRECTO entonces se saluda en caso contrario hay error
  if (nombreMayusculas == NOMBRECORRECTO) {
    return true;
  } else {
    return false;
  }

  function acceder() {
    //Para acceder a una página puedo usar open o href
    location.href =
      "https://www.juntadeandalucia.es/educacion/permanente/materiales/index.php?orientacion#space";
  }
}
