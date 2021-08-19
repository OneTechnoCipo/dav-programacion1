/* function calcular (x){
    let dato =10;
    return x;
} */

const calcular=()=>{ 
    const dato1 = document.getElementById("inp_dato1").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const dato2 = document.getElementById("inp_dato2").value;

    const parte1 = Math.pow(dato1,2)/* dato 1 (Cateto opuesto)elevado al cuadrado */+ Math.pow(dato2,2);/* dato 2 (Cateto adyacente)elevado al cuadrado */

    const resultado = Math.sqrt(parte1);
    document.getElementById("h_resultado").textContent= 'el resultado es: '+resultado
}
const boton=document.getElementById("btn-calcular1");
boton.addEventListener("click",calcular);/* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */