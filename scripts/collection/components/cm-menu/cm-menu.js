import { Host, h } from "@stencil/core";
import { daysOfWeek } from "../../utils/utils";
export class CmMenu {
  constructor() {
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
  static get is() { return "cm-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-menu.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-menu.css"]
    };
  }
  static get properties() {
    return {
      "opened": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "opened",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "selectedDate": {}
    };
  }
  static get listeners() {
    return [{
        "name": "itemClicked",
        "method": "handleMenuItemClicked",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=cm-menu.js.map
