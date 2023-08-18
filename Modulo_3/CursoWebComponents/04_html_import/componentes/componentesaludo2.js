window.customElements.define('componente-saludo', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const template = `<h1>Hola que tal Alexis</h1>`;
        this.shadowRoot.innerHTML = template;
    }
})