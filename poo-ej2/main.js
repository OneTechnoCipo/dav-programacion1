import Area from "./area.js";/*  POO ej bhaskara */

const calcular=()=>{ 
    const valor1 = document.getElementById("inp_a").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const base = document.getElementById("inp_b").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const h = document.getElementById("inp_c").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
        /*  1- se crea la instancia
        2- se envia los parametros al constructor
        3- se ejecuta el constructor */
    const instancia= new Area()
    instancia.valor1=valor1;
    instancia.base=base;
    instancia.h=h;
    const respuesta = instancia.calcularareatrap()

    document.getElementById("resultado").textContent= 'El resultado de area de trapecio es: '+respuesta;

}

const calcularTriangulo2=()=>{ 
    const base2 = document.getElementById("inp_b2").value; /* (const) constante no varia el dato y (let) si el dato solo vive en un proceso */
    const h2 = document.getElementById("inp_c2").value; 

    const instancia= new Area()
    instancia.base2=base2;
    instancia.h2=h2;
    const resultadotriangulo = instancia.calcularareatriangulo()


    document.getElementById("resultadotriangulo").textContent= 'El resultado de triangulo es: '+resultadotriangulo;
}

const boton=document.getElementById("btn-calcular");
boton.addEventListener("click",calcular);/* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */
const boton2=document.getElementById("btn-calcular2");
boton2.addEventListener("click",calcularTriangulo2);/* click al dar un click izquierdo del mouse, dbclick doble click izquierdo */




