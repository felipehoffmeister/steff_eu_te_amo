export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>SOMA</th>
                    <th>SUBTRACAO</th>
                    <th>MULTIPLICACAO</th>
                    <th>DIVISAO</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>  ${negociacao.soma}
                            </td>
                            <td>
                                ${negociacao.subtracao}
                            </td>
                            <td>
                                ${negociacao.multiplicacao}
                            </td>
                            <td>
                            ${negociacao.divisao}
                        </td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
