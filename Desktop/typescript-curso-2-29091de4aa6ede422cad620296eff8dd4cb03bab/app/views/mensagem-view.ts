import { View } from "./view";

export class mensagemView extends View{


    template(model: string): string {
        return `
            
            <p class="alert alert-info">${model}</p>
            
        `

    }

    update(model: string): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }




}