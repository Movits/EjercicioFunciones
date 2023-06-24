const tituloCambio = document.querySelector("#titulo")
const imgCambio = document.querySelector("#img")
const enlaceCambio = document.querySelector("#enlace")
const cuerpoPagina = document.querySelector("body")
const h2NombreUsuario = document.querySelector("#usuario-nombre")

const IMG_1 = "https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg"
const IMG_2 = "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-asylum%2Fhome%2FEGS_WB_Batman_Arkham_Asylum_L1_2560x1440_19_0911-2560x1440-bdfb966b14e5f9bb6a2bf48a148d36566ca96df0.jpg"
const IMG_3 = "https://arquivo.devmedia.com.br/noticias/artigos/artigo_javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto_37981.jpg"

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/"
const ENLACE_2 = "https://discord.com"
const ENLACE_3 = "https://stackoverflow.com"

const IMG_TAM_1 = "200px";
const IMG_TAM_2 = "300px";
const IMG_TAM_3 = "450px";

const LETRA_TAM_1 = "15px";
const LETRA_TAM_2 = "20px";
const LETRA_TAM_3 = "30px";

const TIPO_FUENTE_1 = "monospace";
const TIPO_FUENTE_2 = "cursive";
const TIPO_FUENTE_3 = "fantasy";

const TXT_USUARIO_COLOR_1 = "red";
const TXT_USUARIO_COLOR_2 = "purple";
const TXT_USUARIO_COLOR_3 = "white";

let usuarioRecibido = prompt("Ingrese su nombre")
let opcionRecibida = prompt("Ingrese la opcion estetica: 1, 2 o 3");

h2NombreUsuario.innerHTML = usuarioRecibido

function modificarPagina(colorFundo,colorTexto,enlaceImg,enlacePagina,anchoImg,letraTam,tipoFuente,colorUsuario){
    cuerpoPagina.style.backgroundColor = colorFundo
    cuerpoPagina.style.color = colorTexto
    imgCambio.src = enlaceImg
    enlaceCambio.href = enlacePagina
    imgCambio.style.width = anchoImg
    cuerpoPagina.style.fontSize = letraTam
    cuerpoPagina.style.fontFamily = tipoFuente
    h2NombreUsuario.style.color = colorUsuario
}

if (opcionRecibida == 1) {
    modificarPagina("orange","black",IMG_1,ENLACE_1,IMG_TAM_1,LETRA_TAM_1,TIPO_FUENTE_1,TXT_USUARIO_COLOR_1);
} else if (opcionRecibida == 2) {
    modificarPagina("black","white",IMG_2,ENLACE_2,IMG_TAM_2,LETRA_TAM_2,TIPO_FUENTE_2,TXT_USUARIO_COLOR_2);
} else if (opcionRecibida == 3){
    modificarPagina("pink","green",IMG_3,ENLACE_3,IMG_TAM_3,LETRA_TAM_3,TIPO_FUENTE_3,TXT_USUARIO_COLOR_3);
}