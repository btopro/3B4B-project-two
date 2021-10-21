/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {
  constructor() {
    super();
    this.image = null;
    this.alt = '';
    this.dark = false;
  }

  static get tag() {
    return 'learning-icon';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String },
      type: { type: String, reflect: true },
      alt: { type: String },
    };
  }

  updated(changedProperties) {
    console.log('I ran');
    changedProperties.forEach((oldValue, propName) => {
      console.log(`Prop name:${propName}Value: ${this[propName]}`);
      if (propName === 'type' && this[propName] === 'CHEM CONNECTION') {
        this.image = new URL('../assets/beaker.svg', import.meta.url).href;
      } else if (propName === 'type' && this[propName] === 'DID YOU KNOW?') {
        this.image = new URL('../assets/question.svg', import.meta.url).href;
      } else if (
        propName === 'type' &&
        this[propName] === 'LEARNING OBJECTIVES'
      ) {
        this.image = new URL('../assets/lightbulb.svg', import.meta.url).href;
      }

      console.log(`Image Location: ${this.image}`);
    });
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-flex;
          flex-direction: row;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          border: 1px dotted cyan;
          background-color: var(--learning-card-banner-color);
        }
        span {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          justify-content: center;
          align-items: center;
        }
        img {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          background-color: var(--learning-banner-color);
        }
      `,
    ];
  }

  render() {
    console.log(this.image);
    return html`
      <div>
        <span><img src="${this.image}" alt="${this.alt}" /></span>
      </div>
    `;
    // <span><img src = (${this.image} === "beaker") ? beaker: (${this.image} === "question") ? question : (${this.image} === "lightbulb") ? lightbulb : null} alt="Icon" /></span>
  }
}
customElements.define(LearningIcon.tag, LearningIcon);
