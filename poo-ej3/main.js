import Anime from "./anime.js";

const obtener=()=>{ 
    const instancia = new Anime()
    instancia.obtenerCatalogo()
}



const boton=document.getElementById("btn-obtener");
boton.addEventListener("click",obtener);/* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */



