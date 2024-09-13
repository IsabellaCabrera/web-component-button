import * as components from './components/indexPadre.js';
import { dataCards } from './data/characterdata.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		dataCards.forEach((element) => {
            //manera dos solo es poner la etiqueta, y los atributos que se tienen que llenar con los de la data. 
            // dentro de la etiqueta character-card, el atributo tiene que obtener lo que diga el element.name(atributo del data)
			this.shadowRoot.innerHTML += `
		  <character-card
		    name="${element.name}" 
		    gender="${element.gender}"
		    image="${element.image}">
		  </character-card>
			<counter-button></counter-button>
            <message-button></message-button>

			`;
		});
	}
}

customElements.define('app-container', AppContainer);