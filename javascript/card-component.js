import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class Cardcomponent extends LitElement {

    static properties = {
        elementContent: {type: Object},
    }

    constructor() {
        super();
        this.elementContent = {};
    }

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
        const elementContentValues = this.elementContent ? Object.values(this.elementContent) : [];
        const hasValues = elementContentValues.length > 0;

        return html`
            ${hasValues
                    ? html`
                        <div class="col-lg-4 mx-auto">
                            <div class="card shadow rounded-15">
                                <div class="card-body">
                                    <img src="${this.elementContent.image}" alt="" class="w-100 h-100" />

                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="fw-bolder d-block">Name</span>
                                            ${this.elementContent.name ? html`<span class="fw-boldest">${this.elementContent.name}</span>` : html``}
                                        </div>
                                        <div>
                                            <span class="fw-bolder d-block">Age</span>
                                            ${this.elementContent.age ? html`<span class="fw-boldest">${this.elementContent.age}</span>` : html``}
                                        </div>
                                        <div>
                                            <span class="fw-bolder d-block">Status</span>
                                            ${this.elementContent.status ? html`<span class="fw-boldest">${this.elementContent.status}</span>` : html``}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                    : ''}
        `;
    }
}

customElements.define('card-component', Cardcomponent);