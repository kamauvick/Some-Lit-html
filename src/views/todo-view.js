import { LitElement, html } from 'lit-element';

class TodoView extends LitElement {
  render() {
    return html`
      <p>vick kamau is using lit html :)</p>
    `;
  }
}

customElements.define('todo-view', TodoView);
