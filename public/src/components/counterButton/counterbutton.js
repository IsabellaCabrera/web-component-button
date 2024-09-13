class CounterButton extends HTMLElement {
    // El método static observedAttributes se usaría para observar cambios en los atributos, pero aquí no se necesita.
    // static get observedAttributes(){
    // }

    // El constructor inicializa el componente. 'super()' llama al constructor de HTMLElement.
    constructor(){
        super();
        // attachShadow crea un Shadow DOM aislado donde se renderizará el contenido del componente.
        this.attachShadow({mode:'open'});
        this.count = 0;  // Inicializa el contador en 0.
    }

    // attributeChangedCallback se ejecutaría si los atributos fueran observados, pero aquí no es necesario.
    // attributeChangedCallback(propName, oldValue, newValue){
    // }

    // connectedCallback se llama cuando el componente es añadido al DOM.
    connectedCallback(){
        this.render();  // Renderiza el componente cuando se conecta al DOM.
    }

    // Este método incrementa el valor del contador y luego vuelve a renderizar el componente.
    incrementCount(){
        this.count++;  // Aumenta el valor del contador en 1.
        this.render();  // Vuelve a renderizar el componente para reflejar el nuevo valor del contador.
    }

    // El método render define el HTML que será renderizado dentro del Shadow DOM.
    render(){
        this.shadowRoot.innerHTML = `
        <button> Counter: ${this.count}</button>  <!-- Botón que muestra el valor del contador -->
        `;

        // Añade un evento click al botón que llama al método incrementCount para aumentar el contador.
        this.shadowRoot.querySelector('button').addEventListener('click', () => this.incrementCount());
    }
}

// Definimos el nuevo elemento personalizado 'counter-button'.
customElements.define('counter-button', CounterButton);

// Exportamos la clase para que pueda ser utilizada en otros módulos.
export default CounterButton;
