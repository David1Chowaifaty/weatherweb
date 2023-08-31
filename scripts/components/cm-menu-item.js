import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as daysOfWeek, f as formatDate } from './utils.js';

const cmMenuItemCss = ":host{display:block}div{display:flex;flex-direction:row;justify-content:space-between;align-items:center;cursor:pointer;padding:0 10px;border-radius:5px}div:hover{background-color:#f8fafc}h2{font-size:15px}p{font-size:15px}";

const CmMenuItem$1 = /*@__PURE__*/ proxyCustomElement(class CmMenuItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.itemClicked = createEvent(this, "itemClicked", 7);
    this.data = undefined;
    this.weather = undefined;
  }
  componentWillLoad() {
    if (this.data !== '') {
      this.weather = JSON.parse(this.data);
    }
  }
  changedData() {
    this.weather = JSON.parse(this.data);
    console.log(this.weather);
  }
  handleClick() {
    this.itemClicked.emit(this.data);
  }
  render() {
    return (h(Host, null, h("div", { onClick: this.handleClick.bind(this) }, h("h2", null, daysOfWeek[new Date(this.weather.date).getDay()]), h("p", null, formatDate(this.weather.date)))));
  }
  static get watchers() { return {
    "data": ["changedData"]
  }; }
  static get style() { return cmMenuItemCss; }
}, [1, "cm-menu-item", {
    "data": [1537],
    "weather": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-menu-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmMenuItem$1);
      }
      break;
  } });
}

const CmMenuItem = CmMenuItem$1;
const defineCustomElement = defineCustomElement$1;

export { CmMenuItem, defineCustomElement };

//# sourceMappingURL=cm-menu-item.js.map