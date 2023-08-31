import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as daysOfWeek } from './utils.js';
import { d as defineCustomElement$4 } from './cm-date2.js';
import { d as defineCustomElement$3 } from './cm-sunmoonimage2.js';
import { d as defineCustomElement$2 } from './cm-temperature2.js';

const cmMainweatherCss = ":host{display:flex;border-radius:20px;background:#f8fafc;height:min-content;width:30rem;max-width:85%;margin:0 auto;align-items:center;padding:1rem;color:#475569;position:relative;gap:20px}.weather-info{display:flex;flex-direction:column}.weather-header{display:flex;align-items:center}.weather-icon{height:60px;width:60px;position:absolute;right:20px;top:50%;transform:translateY(-50%)}.temperature-range{font-weight:bold;margin-bottom:10px;display:flex;align-items:center}.temp-max{font-size:26px}.temp-min{color:#64748b}.weather-description{margin:0;margin-bottom:10px}.extra-info{display:none;justify-content:space-between;align-items:center;margin-top:20px}.weather-container{display:flex;align-items:center}.sunmoon .icon{display:none}.real-feel,.humidity,.wind{margin-bottom:5px}.humidity-value,.wind-speed{font-weight:bold}@media only screen and (min-width: 768px){:host{justify-content:space-between;width:90%}.weather-icon{display:none}.weather-container{gap:20px}.sunmoon .icon{display:block;height:60px;width:60px}.extra-info{display:block;flex:1;max-width:40%}.details>p{width:100%;display:flex;align-items:center;justify-content:space-between}}@media only screen and (min-width: 992px){:host{width:70%;padding:2rem;height:10rem}.sunmoon .icon{height:100px;width:100px}}";

const CmMainweather$1 = /*@__PURE__*/ proxyCustomElement(class CmMainweather extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get watchers() { return {
    "data": ["changedData"]
  }; }
  static get style() { return cmMainweatherCss; }
}, [1, "cm-mainweather", {
    "data": [1537],
    "weather": [32]
  }, [[16, "dayclicked", "changeData"], [16, "itemClicked", "dropDownData"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-mainweather", "cm-date", "cm-sunmoonimage", "cm-temperature"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-mainweather":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmMainweather$1);
      }
      break;
    case "cm-date":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "cm-sunmoonimage":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "cm-temperature":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CmMainweather = CmMainweather$1;
const defineCustomElement = defineCustomElement$1;

export { CmMainweather, defineCustomElement };

//# sourceMappingURL=cm-mainweather.js.map