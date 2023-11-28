import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class Micomponent extends LitElement{
    static get properties () {
        return {
            colors: {type: Array}
        };
    }

    constructor(){
        super();
        this.colors = ['Rojo','Verde','Negro','Azul'];
    }

    render() {
        return html`
        <ul>
        ${this.colors.map((color) =>{
            html `<li style="color: ${color}">${color}</li>`
        })}
        </ul>
        `
    }



}

customElements.define('mi-component', Micomponent);
