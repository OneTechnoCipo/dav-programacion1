/* TP 2 */
const calcular=()=>{ 
    const datoa = document.getElementById("inp_a").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const datob = document.getElementById("inp_b").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const datoc = document.getElementById("inp_c").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const parte1 = (Math.pow(datob,2))-(4*datoa*datoc);/* dato 1 (Cateto opuesto)elevado al cuadrado */
    const raíz = Math.sqrt(parte1);

    const r1=(-datob+raíz)/ (2*datoa);
    const r2=(-datob-raíz)/ (2*datoa);
    document.getElementById("r1").textContent= 'el resultado de raíz 1 es: '+r1;
    document.getElementById("r2").textContent= 'el resultado de raíz 2 es: '+r2;
}
const boton=document.getElementById("btn-calcular");
boton.addEventListener("click",calcular);/* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */