import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'; 

class MyCustom extends LitElement {
    constructor () {
        const ShadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.innerHTML = `
         <style>
         p { 
            color: red;
         }
         </style>
         <p>Este es mi Custom Element</p>
        `
    }
}

customElements.define('my-custom', MyCustom);