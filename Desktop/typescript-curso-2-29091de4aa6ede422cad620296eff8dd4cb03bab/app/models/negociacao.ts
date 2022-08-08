export class Negociacao {
    constructor(
       
        public readonly valor1: number, 
        public readonly valor2: number
    ) {}

    get soma(): number {
        return this.valor1 + this.valor2;
    }
    get subtracao(): number {
        return this.valor1 - this.valor2;
    }
    get multiplicacao(): number {
        return this.valor1 * this.valor2;
    }
    get divisao(): number {
        return this.valor1 / this.valor2;
    }

    
}