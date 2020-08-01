document.addEventListener('DOMContentLoaded',()=>{
    class PlayerWidgetComponent extends HTMLElement{
        constructor(){
            super();

            let template = document.querySelector('#player-widget');
            let content = template.content;

            const shadowRoot=this.attachShadow({mode:'open'});
            shadowRoot.appendChild(content.cloneNode(true));
        };

        connectedCallback(){
            console.log('Element added to DOM');
        };

        disconnectedCallback(){
            console.log('Element removed from DOM');
        };
    };

    customElements.define('player-widget',PlayerWidgetComponent);
});
