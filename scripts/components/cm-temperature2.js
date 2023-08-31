import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cmTemperatureCss = ":host{display:block}";

const CmTemperature = /*@__PURE__*/ proxyCustomElement(class CmTemperature extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.temp = undefined;
  }
  render() {
    return (h(Host, null, h("span", null, this.temp, "\u00B0")));
  }
  static get style() { return cmTemperatureCss; }
}, [1, "cm-temperature", {
    "temp": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-temperature"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-temperature":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmTemperature);
      }
      break;
  } });
}

export { CmTemperature as C, defineCustomElement as d };

//# sourceMappingURL=cm-temperature2.js.map