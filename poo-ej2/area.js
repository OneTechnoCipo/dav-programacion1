/* Tp2 POO calcular superficies. */
export default class area{
    valor1;
    base;
    h;
    base2;
    h2;
    constructor(){

    }
    calcularareatrap(){/* area de trapecio */
        const resultado= (((parseInt(this.valor1)+parseInt(this.base))/2)*parseInt(this.h));
        return resultado.toFixed(2);
    }
    calcularareatriangulo(){/* area de triangulo */
        const multi = (parseInt(this.base2))*(parseInt(this.h2));
        const resultadotriangulo = (multi/2);
        return resultadotriangulo.toFixed(2);
    }

}