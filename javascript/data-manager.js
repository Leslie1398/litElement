import {LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class DataManager extends LitElement{

    static properties = {
        posi: {type: Number},
        limit: {type: Number},
    }

    constructor() {
        super();
        this.posi = 0;
        

    }

    updated(changed){
        debugger
        if(changed.has('posi')){
            this.changeValues()
        }
    }
    getValueButton(){
        this.posi ++;
    
    }
    getValueButtonReturn(){
        this.posi --;
       
    }

    changeValues(){
        const valueData = new CustomEvent('change-value', {
            detail: this.posi,
            bubbles: true,
            composed: true,
        });
       
        this.dispatchEvent(valueData);
    
    }

}

customElements.define('data-manager', DataManager);