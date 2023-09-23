import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'; 

class MiComponent extends LitElement {
    static get properties() {
        return {
            nombre: {type: String,
            attribute: true,
            reflect: true},
            contador: {type: Number},
        };
    }

    constructor() {
        super();
        this.nombre = 'John Doe';
        this.contador = 0;
    }

    render (){
        return html`
        <div>
          <p>Hola, es mi contenido</p>
        </div>
      `;
    }

    incrementar() {
        this.contador ++;
    }
}

customElements.define('mi-component', MiComponent);