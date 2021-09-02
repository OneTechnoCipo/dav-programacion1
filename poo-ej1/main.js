import Bhaskara from "./bhaskara.js";/*  POO ej bhaskara */

const calcular=()=>{ 
    const a = document.getElementById("inp_a").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const b = document.getElementById("inp_b").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const c = document.getElementById("inp_c").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
        /*  1- se crea la instancia
        2- se envia los parametros al constructor
        3- se ejecuta el constructor */
    const instancia= new Bhaskara(a,b,c)
    /*  haciendo uso de la instancia ejecutamos el 
        metodo de la clase calcular_r1() */
    const raiz1 = instancia.calcular_r1()
    const raiz2 = instancia.calcular_r2()

    document.getElementById("r1").textContent= 'el resultado de raíz 1 es: '+raiz1;
    document.getElementById("r2").textContent= 'el resultado de raíz 2 es: '+raiz2;

}
const boton=document.getElementById("btn-calcular");
boton.addEventListener("click",calcular);/* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */




