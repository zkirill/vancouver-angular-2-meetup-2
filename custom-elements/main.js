// class Vangular extends HTMLElement {
//     constructor() {
//         super();
//         console.info('constructed');
//     }
//     connectedCallback() {
//         console.info('connected');
//         this.innerHTML = 'Please enjoy!';
//     }
// };

// class ExampleParagraph extends HTMLParagraphElement {
//     constructor() {
//         super();
//     }
//     connectedCallback() {
//         this.innerHTML = 'Please enjoy!';
//     }
// };

// customElements.define('v-angular', Vangular);
// customElements.define('example-paragraph', ExampleParagraph, { extends: 'p' });