import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class ContentComponent extends LitElement {
    static get styles() {
        const {cssRules} = document.styleSheets[0]
        const globalStyle = css([Object.values(cssRules).map(rule =>
            rule.cssText).join('\n')])
        return [
            globalStyle,
            css`
            `
        ];
    }
    render(){
        return html `
        <div class="">
            <card-component></card-component>
            <buttons-component @next-button="${()=> this.changeButtonNext()}" @return-button="${() => this.changeButtonReturn()}"></buttons-component>
            <data-provider @array-info="${this.eventChange}"></data-provider>
            <data-manager
                    @change-value="${this.eventChange}" ></data-manager>
        </div>
        `
    }

    changeButtonNext(){
        const refDataM = this.shadowRoot.querySelector('data-manager');
        refDataM.getValueButton();

    }

    changeButtonReturn(){
        const refDataMRe = this.shadowRoot.querySelector('data-manager');
        refDataMRe.getValueButtonReturn();
    }

    eventChange(event){
      
        const refDataArray =  this.shadowRoot.querySelector('data-provider');
        const refCardContent = this.shadowRoot.querySelector('card-component');

        refCardContent.elementContent = refDataArray.dataArray[event.detail];
        debugger
      
    }
}

customElements.define('content-component', ContentComponent);



