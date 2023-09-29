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
        this.nombre = 'Leslie';
        this.contador = 0;
    }

    render (){
        return html`
        <div>
              <h1>Hola, ${this.nombre}!</h1>
              <p>Contador: ${this.contador}</p>
              <button @click="${this.incrementar}">Incrementar</button>  
        </div>
      `;
    }

    incrementar() {
        this.contador ++;
    }
}

customElements.define('mi-component', MiComponent);