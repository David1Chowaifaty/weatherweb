import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as daysOfWeek, f as formatDate } from './utils.js';

const cmDateCss = ":host{display:block}h2,p{margin:0}div,.today{margin-bottom:10px}";

const CmDate = /*@__PURE__*/ proxyCustomElement(class CmDate extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.date = undefined;
    this.isToday = undefined;
  }
  checkDate() {
    const currentDate = new Date().getDay();
    this.newDate = new Date(this.date).getDay();
    if (currentDate === this.newDate) {
      this.isToday = true;
    }
    else {
      this.isToday = false;
    }
  }
  componentWillLoad() {
    this.checkDate();
  }
  handleDateChange() {
    this.checkDate();
  }
  render() {
    return (h(Host, null, this.isToday ? (h("h2", { class: 'today' }, "Today")) : (h("div", null, h("h2", null, daysOfWeek[this.newDate]), h("p", null, formatDate(new Date(this.date)))))));
  }
  static get watchers() { return {
    "date": ["handleDateChange"]
  }; }
  static get style() { return cmDateCss; }
}, [1, "cm-date", {
    "date": [513],
    "isToday": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-date"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-date":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmDate);
      }
      break;
  } });
}

export { CmDate as C, defineCustomElement as d };

//# sourceMappingURL=cm-date2.js.map