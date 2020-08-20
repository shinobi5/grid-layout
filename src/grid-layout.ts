const getItem = (list: string, item: number = 0, char: string = ',') => 
  list && list.trim().split(char)[item];

class GridLayout extends HTMLElement {
  static get observedAttributes() { 
    return [
      'align',
      'breakpoints',
      'cols',
      'col',
      'justify',
      'rowsrange',
      'space',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.render();
  }

  breakpointStyles() {
    const bpList = this.breakpoints ? this.breakpoints.trim().split(',') : [];
    const bps = bpList.map((bp: string, i: number) => (`
      @media screen and (min-width: ${bp}) {
        :host {
          gap: ${getItem(this.space, i + 1) || '0'};
          grid-template-columns: 
            repeat(${getItem(this.cols, i + 1) || '1'}, ${getItem(this.col, i + 1) || '1fr'});
        }
      }
      `
    ));

    return bps.join('');
  }

  get space() {
    return this.getAttribute('space');
  }

  set space(newValue) {
    this.setAttribute('space', newValue);
  }

  get cols() {
    return this.getAttribute('cols');
  }

  set cols(newValue) {
    this.setAttribute('cols', newValue);
  }

  get col() {
    return this.getAttribute('col');
  }

  set col(newValue) {
    this.setAttribute('col', newValue);
  }

  get rowsRange() {
    return this.getAttribute('rowsrange');
  }

  set rowsRange(newValue) {
    this.sestAttribute('rowsrange', newValue);
  }

  get align() {
    return this.getAttribute('align');
  }

  set align(newValue) {
    this.setAttribute('align', newValue);
  }

  get justify() {
    return this.getAttribute('justify');
  }

  set justify(newValue) {
    this.setAttribute('justify', newValue);
  }

  get breakpoints() {
    return this.getAttribute('breakpoints');
  }

  set breakpoints(newValue) {
    this.setAttribute('breakpoints', newValue);
  }

  render() {
    const template = `
      <style>
        :host {
          display: grid;
          gap: ${getItem(this.space) || '0'};
          align-items: ${this.align || 'inherit'};
          align-content: ${this.align || 'inherit'};
          justify-items: ${this.justify || 'inherit'};
          justify-content: ${this.justify || 'inherit'};
          grid-auto-rows: 
            minmax(
              ${getItem(this.rowsRange) || '100px'}, 
              ${getItem(this.rowsRange, 1) || 'auto'});
          grid-template-columns: 
            repeat(${getItem(this.cols) || '1'}, ${getItem(this.col) || '1fr'});
        }      
        ${this.breakpoints ? this.breakpointStyles() : ''}
      </style>
      <slot></slot>
    `;

    this.shadowRoot.innerHTML = template;
  }

  attributeChangedCallback(_: string, oldValue: string, newValue: string) {
    if(oldValue !== newValue) {
      this.render();
    }
  }
}

customElements.define('grid-layout', GridLayout);