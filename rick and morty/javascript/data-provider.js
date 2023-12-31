import {LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class DataProvider extends LitElement{
    static properties = {
        dataArray: {type: Array},
    }

    constructor() {
        super();
        this.dataArray = [];
    }

    connectedCallback(){
        super.connectedCallback();
        this.getData();
    }

    getData (){
        axios.get('https://rickandmortyapi.com/api/character').then((response) =>{
            this.dataArray = response.data.results;
            const infoArray = new CustomEvent('array-info',{
                detail: 0,
                bubbles: true,
                composed: true
            })
            this.dispatchEvent(infoArray);
          
        })
    }
}

customElements.define('data-provider', DataProvider);