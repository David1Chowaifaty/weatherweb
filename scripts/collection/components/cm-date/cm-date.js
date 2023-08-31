import { Host, h } from "@stencil/core";
import { daysOfWeek, formatDate } from "../../utils/utils";
export class CmDate {
  constructor() {
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
  static get is() { return "cm-date"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-date.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-date.css"]
    };
  }
  static get properties() {
    return {
      "date": {
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
        "attribute": "date",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "isToday": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "date",
        "methodName": "handleDateChange"
      }];
  }
}
//# sourceMappingURL=cm-date.js.map
