class CharacterCard extends HTMLElement {
   
    // El constructor inicializa la clase, y 'super()' se utiliza para heredar las propiedades y métodos del HTMLElement.
    constructor(){
      super();
      // attachShadow crea un Shadow DOM para el componente, con modo 'open' que permite acceder a él externamente.
      this.attachShadow({mode: "open"})
    }
    
    // ObservedAttributes es un método estático que define qué atributos serán observados para detectar cambios en ellos.
    static get observedAttributes(){
        return ['name', 'gender', 'image'];  // Aquí observamos los atributos 'name', 'gender' e 'image'.
    }

    // attributeChangedCallback se dispara cada vez que uno de los atributos observados cambia.
    // Se comparan el valor viejo y el nuevo, y si son diferentes, se actualiza el atributo.
    attributeChangedCallback(propName, oldValue, newValue){
        if (oldValue !== newValue) {
            this[propName] = newValue;  // Actualizamos la propiedad del componente con el nuevo valor.
            this.render();  // Llamamos a render para actualizar el contenido del componente.
        }
    }

    // connectedCallback es un ciclo de vida que se llama cuando el componente es añadido al DOM.
    connectedCallback(){
        this.render();  // Renderiza el contenido del componente cuando se agrega al DOM.
    }

    // Render es el método que define el HTML que será renderizado dentro del Shadow DOM.
    render() {
        this.shadowRoot.innerHTML = 
        `<h1>${this.name || 'No tiene nombre'}</h1>  <!-- Mostramos el nombre o un valor por defecto -->
         <p>${this.gender || 'No tiene genero'}</p>  <!-- Mostramos el género o un valor por defecto -->
         <img src="${this.image}"></img>`;       
    }
}

// Definimos el nuevo elemento personalizado 'character-card'.
customElements.define('character-card', CharacterCard);

// Exportamos la clase para que pueda ser utilizada en otros módulos.
export default CharacterCard;
