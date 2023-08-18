import {html, LitElement} from "lit-element";
import './tabla.js';
import './registro.js';

class  Home extends LitElement {
    static get properties() {
        return {
            lista: {type:Array},
        }
    }

    constructor () {
        super();
        this.lista = [      
            {nombre: 'Carmen', appellidos:'Rodea Perez', edad: 26},
            {nombre: 'Bryan', appellidos:'Martinez Carso', edad: 32},
            {nombre: 'Jesús', appellidos:'Alaniz Camargo', edad: 50},
        ]
    }
    agregarAlista(event) {
        let newlista = Object.assign([], this.lista);
        newlista.push(event.detail);
        this.lista = newlista;
    }

    render(){
        return html`
            <wc-registro @guardarPersona="${this.agregarAlista}"></wc-registro>
            <wc-tabla .lista= "${this.lista}"></wc-tabla>
            `
    }
}
window.customElements.define('wc-home', Home);