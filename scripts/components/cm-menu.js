import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as daysOfWeek } from './utils.js';

const cmMenuCss = ":host{display:block;position:relative}:host([opened]) .container{display:block}.container{background:white;width:15rem;position:absolute;right:0;box-shadow:36px 35px 47px -4px rgba(0, 0, 0, 0.07);border-radius:10px;display:none;z-index:100;padding:10px;top:40px}button{border:0;padding:10px;border-radius:5px;background-color:rgb(243, 243, 243);cursor:pointer}";

const CmMenu$1 = /*@__PURE__*/ proxyCustomElement(class CmMenu extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.opened = false;
    this.selectedDate = '';
  }
  handleMenuItemClicked(ev) {
    const data = JSON.parse(ev.detail);
    this.selectedDate = daysOfWeek[new Date(data.date).getDay()];
    this.toggleOpened();
  }
  toggleOpened() {
    this.opened = !this.opened;
  }
  render() {
    return (h(Host, null, h("button", { onClick: this.toggleOpened.bind(this) }, this.selectedDate !== '' ? this.selectedDate : 'Choose a date'), h("div", { class: 'container' }, h("slot", null))));
  }
  static get style() { return cmMenuCss; }
}, [1, "cm-menu", {
    "opened": [1540],
    "selectedDate": [32]
  }, [[16, "itemClicked", "handleMenuItemClicked"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmMenu$1);
      }
      break;
  } });
}

const CmMenu = CmMenu$1;
const defineCustomElement = defineCustomElement$1;

export { CmMenu, defineCustomElement };

//# sourceMappingURL=cm-menu.js.map