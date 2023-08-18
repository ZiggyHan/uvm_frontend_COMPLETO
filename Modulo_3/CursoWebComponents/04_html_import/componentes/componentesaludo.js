const req = new XMLHttpRequest();

req.addEventListener('load', reqListener);
const scripUrl = document.currentScript.src.replace(location.origin, '').split('/');
scripUrl.pop();
req.open('GET', scripUrl.join('/') + '/saludotemplate.html');
req.send();

function reqListener() {
    
    const template = this.responseText;

    const div = document.createElement('div');
    div.innerHTML = template;

    window.customElements.define('componente-saludo', class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
            let content = div.firstChild.content;
            this.shadowRoot.appendChild(content);
        }
    })
}