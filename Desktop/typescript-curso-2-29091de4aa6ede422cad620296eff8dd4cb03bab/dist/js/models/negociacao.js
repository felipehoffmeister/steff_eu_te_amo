export class Negociacao {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    get soma() {
        return this.valor1 + this.valor2;
    }
    get subtracao() {
        return this.valor1 - this.valor2;
    }
    get multiplicacao() {
        return this.valor1 * this.valor2;
    }
    get divisao() {
        return this.valor1 / this.valor2;
    }
}
