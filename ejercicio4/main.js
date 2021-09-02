/* TP3 */
const calcular_tiempo=()=>{ 
    const inpvi = document.getElementById("inp_vi").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const inpvf = document.getElementById("inp_vf").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const parte1 = (inpvi-inpvf/9.81);/*  */

    return parte1;
}


const mostrar=()=>{ 
    const respuesta = calcular_tiempo()
    document.getElementById("parte1").textContent= 'el resultado de caída libre es: '+respuesta;

   /* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */
}
const boton=document.getElementById("btn-mostrar");
boton.addEventListener("click",mostrar);