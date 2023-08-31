import { Host, h } from "@stencil/core";
import { daysOfWeek, formatDate } from "../../utils/utils";
export class CmWeather {
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
    this.dayclicked.emit(this.data);
  }
  render() {
    if (this.weather === undefined) {
      return null;
    }
    else {
      return (h(Host, null, h("button", { class: "weather-button", onClick: this.handleClick.bind(this) }, h("h2", { class: "day-of-week" }, daysOfWeek[new Date(this.weather.date).getDay()]), h("p", { class: "date" }, formatDate(this.weather.date)), h("cm-sunmoonimage", { class: "sunmoon-image" }), h("p", { class: "temperature-range" }, h("cm-temperature", { class: "temp-max", temp: this.weather.temp_max.toString() }), "/ ", h("cm-temperature", { class: "temp-min", temp: this.weather.temp_min.toString() })), h("p", { class: "weather-description" }, this.weather.description))));
    }
  }
  static get is() { return "cm-weather"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-weather.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-weather.css"]
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
        "method": "dayclicked",
        "name": "dayclicked",
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
//# sourceMappingURL=cm-weather.js.map
