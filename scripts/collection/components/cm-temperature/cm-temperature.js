import { Host, h } from "@stencil/core";
export class CmTemperature {
  constructor() {
    this.temp = undefined;
  }
  render() {
    return (h(Host, null, h("span", null, this.temp, "\u00B0")));
  }
  static get is() { return "cm-temperature"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-temperature.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-temperature.css"]
    };
  }
  static get properties() {
    return {
      "temp": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "temp",
        "reflect": true
      }
    };
  }
}
//# sourceMappingURL=cm-temperature.js.map
