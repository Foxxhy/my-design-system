import { LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js'
import { ICONS } from './icons';

@customElement('f-icon')
export class FIcon extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = '';
  }

  @property({ type: String })
  name = '';

  render() {
    const iconHtml: string = ICONS[this.name as keyof typeof ICONS];
    return unsafeHTML(iconHtml);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'f-icon': FIcon
  }
}
