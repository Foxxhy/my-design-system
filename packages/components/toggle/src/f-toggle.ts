import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators'

const defaultChange = () => console.log('{ level: info, message: "onChange call" }');

@customElement('f-toggle')
export class FToggle extends LitElement {
  static get properties() {
    return {
      theme: { type: String },
      checked: { type: Boolean, attribute: true },
      disabled: { type: Boolean, attribute: true },
      change: { type: Function, attribute: true }
    };
  }

  static styles = css`
    .f-toggle {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    
    .f-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .f-toggle-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 34px;
      transition: 0.4s;
    }
    
    .f-toggle-slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: 0.4s;
    }
    
    input:checked + .f-toggle-slider:before {
      transform: translateX(26px);
    }
    
    input:checked + .f-toggle-blue {
      background-color: #2196F3;
    }
    
    .f-toggle-success.checked {
      background-color: #28a745;
    }
    input:checked + .f-toggle-success {
      background-color: #28a745;
    }
    
    .f-toggle-info.checked {
      background-color: #17a2b8;
    }
    input:checked + .f-toggle-info {
      background-color: #17a2b8;
    }
    
    .f-toggle-warning.checked {
      background-color: #ffc107;
    }
    input:checked + .f-toggle-warning {
      background-color: #ffc107;
    }
    
    .f-toggle-danger.checked {
      background-color: #dc3545;
    }
    input:checked + .f-toggle-danger {
      background-color: #dc3545;
    }
    
    .f-toggle-light.checked {
      background-color: #f8f9fa;
    }
    input:checked + .f-toggle-light {
      background-color: #f8f9fa;
    }
    
    .f-toggle-dark.checked {
      background-color: #343a40;
    }
    input:checked + .f-toggle-dark {
      background-color: #343a40;
    }  
  `;

  constructor() {
    super();
    this.theme = 'success';
    this.checked = false;
    this.disabled = false;
    this.change = defaultChange;
  }

  @property({ type: String })
  theme = '';

  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Function })
  change = defaultChange;

  render() {

    return html`
    <label class="f-toggle">
        <input
          type="checkbox"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          @change="${this.change}"
        />
        <span class="f-toggle-slider f-toggle-${this.theme}"></span>
    </label>
  `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'f-toggle': FToggle
  }
}
