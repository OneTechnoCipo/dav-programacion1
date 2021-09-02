/* TP Área de un círculo  */
const calcular=()=>{ 
    const datoa = document.getElementById("inp_a").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const parte1 = (Math.pow (datoa,2)*(Math.PI));/*  */

    document.getElementById("parte1").textContent= 'el resultado de area es: '+parte1;
}
const boton=document.getElementById("btn-calcular");
boton.addEventListener("click",calcular);/* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */