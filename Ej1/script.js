const tituloCambio = document.querySelector("#titulo")
const imgCambio = document.querySelector("#img")
const enlaceCambio = document.querySelector("#enlace")
const cuerpoPagina = document.querySelector("body")

const IMG_1 = "https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg"
const IMG_2 = "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-asylum%2Fhome%2FEGS_WB_Batman_Arkham_Asylum_L1_2560x1440_19_0911-2560x1440-bdfb966b14e5f9bb6a2bf48a148d36566ca96df0.jpg"
const IMG_3 = "https://arquivo.devmedia.com.br/noticias/artigos/artigo_javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto_37981.jpg"

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/"
const ENLACE_2 = "https://discord.com"
const ENLACE_3 = "https://stackoverflow.com"
let opcionRecibida = prompt("Ingrese la opcion estetica: 1, 2 o 3.");

if (opcionRecibida == 1) {
    console.log("Elegiste opc 1");
    cuerpoPagina.style.backgroundColor = "orange"
    cuerpoPagina.style.color = "black"
    imgCambio.src = IMG_1
    enlaceCambio.href = ENLACE_1
} else if (opcionRecibida == 2) {
    console.log("Elegiste opc 2");
    cuerpoPagina.style.backgroundColor = "black"
    cuerpoPagina.style.color = "white"
    imgCambio.src = IMG_2
    enlaceCambio.href = ENLACE_2
} else if (opcionRecibida == 3){
    console.log("Elegiste opc 3");
    cuerpoPagina.style.backgroundColor = "pink"
    cuerpoPagina.style.color = "green"
    imgCambio.src = IMG_3
    enlaceCambio.href = ENLACE_3
}