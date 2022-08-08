import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputValor1 = document.querySelector('#valor1');
        this.inputValor2 = document.querySelector('#valor2');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const valor1 = parseFloat(this.inputValor1.value);
        const valor2 = parseFloat(this.inputValor2.value);
        return new Negociacao(valor1, valor2);
    }
    limparFormulario() {
        this.inputValor1.value = '';
        this.inputValor2.value = '';
    }
}
