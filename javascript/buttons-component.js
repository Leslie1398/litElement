import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class ButtonsComponent extends LitElement{
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

    render() {
        return html `
        <div class="col-lg-4 mx-auto">
            <div class="card shadow rounded-15">
                <div class="d-flex justify-content-around">
                    <button type="button" class="btn btn-info" @click="${() => this.clickReturn()}">
                        regresar
                    </button>
                    <button type="button" class="btn btn-info" @click="${() => this.clickNext()}">
                        adelante
                    </button>
                </div>
            </div>
        </div>
        `
    }

    clickNext(){
        const nextButton = new CustomEvent(
            'next-button')
        this.dispatchEvent(nextButton);
    }
    clickReturn(){
        const returnButton = new CustomEvent('return-button');
        this.dispatchEvent(returnButton);
    }
}

customElements.define('buttons-component', ButtonsComponent);