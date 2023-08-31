import { Host, h } from "@stencil/core";
import { daysOfWeek, formatDate } from "../../utils/utils";
export class CmMenuItem {
  constructor() {
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
  static get is() { return "cm-menu-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-menu-item.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-menu-item.css"]
    };
  }
  static get properties() {
    return {
      "data": {
        "type": "string",
        "mutable": true,
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
        "attribute": "data",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "weather": {}
    };
  }
  static get events() {
    return [{
        "method": "itemClicked",
        "name": "itemClicked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "data",
        "methodName": "changedData"
      }];
  }
}
//# sourceMappingURL=cm-menu-item.js.map
