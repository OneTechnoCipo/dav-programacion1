/* Tp1 POO. */
export default class Bhaskara{
    ca;
    cb;
    ti;
    constructor(a,b,c){
        this.ca=a;
        this.cb=b;
        this.ti=c;
    }

    calcular_r1(){
        const bloque1 = (Math.pow(this.cb,2))-(4*this.ca*this.ti);/* dato 1 (Cateto opuesto)elevado al cuadrado */
        const raíz = Math.sqrt(bloque1);
        const r1=(-this.cb+raíz)/ (2*this.ca);
        return r1.toFixed(2);
    }
    calcular_r2(){
        const bloque1 = (Math.pow(this.cb,2))-(4*this.ca*this.ti);/* dato 1 (Cateto opuesto)elevado al cuadrado */
        const raíz = Math.sqrt(bloque1);
        const r2=(-this.cb-raíz)/ (2*this.ca);
        return r2.toFixed(2);
    }
}