class MessageButton extends HTMLElement {
    // El método static observedAttributes sería para observar cambios en los atributos, pero aquí no es necesario.
    // static get observedAttributes(){
    // }

    // El constructor inicializa el componente. 'super()' llama al constructor de HTMLElement.
    constructor(){
        super();
        // attachShadow crea un Shadow DOM donde se renderizará el contenido del componente.
        this.attachShadow({mode:'open'});
        this.isSelected = false;  // Inicializa la variable isSelected en false.
    }

    // attributeChangedCallback se ejecutaría si se observaran atributos, pero aquí no se usa.
    // attributeChangedCallback(propName, oldValue, newValue){
    // }

    // connectedCallback se llama cuando el componente es añadido al DOM.
    connectedCallback(){
        this.render();  // Renderiza el contenido del componente cuando se conecta al DOM.
    }

    // Este método cambia el estado de isSelected entre true y false, y luego vuelve a renderizar el componente.
    changeMessage(){
        this.isSelected = !this.isSelected;  // Alterna el valor de isSelected (true o false).
        this.render();  // Vuelve a renderizar el componente para reflejar el nuevo estado.
    }

    // El método render define el HTML que será mostrado dentro del Shadow DOM.
    render(){
        // Condicional ternario que muestra un texto diferente dependiendo del valor de isSelected.
        this.shadowRoot.innerHTML = `
        <button> ${this.isSelected ? 'Agregado a favoritos' : 'Agregar a favoritos'}</button>
        `;

        // Añade un evento click al botón que llama al método changeMessage para cambiar el texto.
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.changeMessage());
    }
}

// Definimos el nuevo elemento personalizado 'message-button'.
customElements.define('message-button', MessageButton);

// Exportamos la clase para que pueda ser utilizada en otros módulos.
export default MessageButton;
