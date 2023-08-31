import { Host, h } from "@stencil/core";
import { daysOfWeek } from "../../utils/utils";
export class CmMainweather {
  constructor() {
    this.data = undefined;
    this.weather = undefined;
  }
  changeData(ev) {
    this.data = ev.detail;
  }
  dropDownData(ev) {
    this.data = ev.detail;
  }
  componentWillLoad() {
    if (this.data !== '') {
      this.weather = JSON.parse(this.data);
    }
  }
  changedData() {
    this.weather = JSON.parse(this.data);
  }
  renderDate(date) {
    const currentDate = new Date().getDay();
    const newDate = new Date(date).getDay();
    if (currentDate === newDate) {
      return 'Today';
    }
    else {
      return daysOfWeek[newDate];
    }
  }
  render() {
    if (this.weather === undefined) {
      return null;
    }
    else {
      return (h(Host, null, h("div", { class: "weather-info" }, h("div", { class: "weather-header" }, h("div", { class: "weather-icon" }, h("cm-sunmoonimage", { class: "icon" })), h("div", { class: "date" }, h("cm-date", { date: this.weather.date.toString() }))), h("p", { class: "weather-description" }, this.weather.description), h("div", { class: 'weather-container' }, h("div", { class: "sunmoon" }, h("cm-sunmoonimage", { class: "icon" })), h("p", { class: "temperature-range" }, h("cm-temperature", { class: "temp-max", temp: this.weather.temp_max.toString() }), "/", h("cm-temperature", { class: "temp-min", temp: this.weather.temp_min.toString() })))), h("div", { class: "extra-info" }, h("div", { class: "details" }, h("p", { class: "real-feel" }, "RealFeel ", h("cm-temperature", { class: "feels-like", temp: this.weather.feels_like.toString() })), h("p", { class: "humidity" }, "Humidity ", h("span", { class: "humidity-value" }, this.weather.humidity)), h("p", { class: "wind" }, "Wind ", h("span", { class: "wind-speed" }, this.weather.windspeed))))));
    }
  }
  static get is() { return "cm-mainweather"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-mainweather.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-mainweather.css"]
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
  static get watchers() {
    return [{
        "propName": "data",
        "methodName": "changedData"
      }];
  }
  static get listeners() {
    return [{
        "name": "dayclicked",
        "method": "changeData",
        "target": "body",
        "capture": false,
        "passive": false
      }, {
        "name": "itemClicked",
        "method": "dropDownData",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=cm-mainweather.js.map
