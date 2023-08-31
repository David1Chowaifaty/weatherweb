'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c414da9.js');
const utils = require('./utils-75bee3ec.js');

const cmMainweatherCss = ":host{display:flex;border-radius:20px;background:#f8fafc;height:min-content;width:30rem;max-width:85%;margin:0 auto;align-items:center;padding:1rem;color:#475569;position:relative;gap:20px}.weather-info{display:flex;flex-direction:column}.weather-header{display:flex;align-items:center}.weather-icon{height:60px;width:60px;position:absolute;right:20px;top:50%;transform:translateY(-50%)}.temperature-range{font-weight:bold;margin-bottom:10px;display:flex;align-items:center}.temp-max{font-size:26px}.temp-min{color:#64748b}.weather-description{margin:0;margin-bottom:10px}.extra-info{display:none;justify-content:space-between;align-items:center;margin-top:20px}.weather-container{display:flex;align-items:center}.sunmoon .icon{display:none}.real-feel,.humidity,.wind{margin-bottom:5px}.humidity-value,.wind-speed{font-weight:bold}@media only screen and (min-width: 768px){:host{justify-content:space-between;width:90%}.weather-icon{display:none}.weather-container{gap:20px}.sunmoon .icon{display:block;height:60px;width:60px}.extra-info{display:block;flex:1;max-width:40%}.details>p{width:100%;display:flex;align-items:center;justify-content:space-between}}@media only screen and (min-width: 992px){:host{width:70%;padding:2rem;height:10rem}.sunmoon .icon{height:100px;width:100px}}";

const CmMainweather = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      return utils.daysOfWeek[newDate];
    }
  }
  render() {
    if (this.weather === undefined) {
      return null;
    }
    else {
      return (index.h(index.Host, null, index.h("div", { class: "weather-info" }, index.h("div", { class: "weather-header" }, index.h("div", { class: "weather-icon" }, index.h("cm-sunmoonimage", { class: "icon" })), index.h("div", { class: "date" }, index.h("cm-date", { date: this.weather.date.toString() }))), index.h("p", { class: "weather-description" }, this.weather.description), index.h("div", { class: 'weather-container' }, index.h("div", { class: "sunmoon" }, index.h("cm-sunmoonimage", { class: "icon" })), index.h("p", { class: "temperature-range" }, index.h("cm-temperature", { class: "temp-max", temp: this.weather.temp_max.toString() }), "/", index.h("cm-temperature", { class: "temp-min", temp: this.weather.temp_min.toString() })))), index.h("div", { class: "extra-info" }, index.h("div", { class: "details" }, index.h("p", { class: "real-feel" }, "RealFeel ", index.h("cm-temperature", { class: "feels-like", temp: this.weather.feels_like.toString() })), index.h("p", { class: "humidity" }, "Humidity ", index.h("span", { class: "humidity-value" }, this.weather.humidity)), index.h("p", { class: "wind" }, "Wind ", index.h("span", { class: "wind-speed" }, this.weather.windspeed))))));
    }
  }
  static get watchers() { return {
    "data": ["changedData"]
  }; }
};
CmMainweather.style = cmMainweatherCss;

exports.cm_mainweather = CmMainweather;

//# sourceMappingURL=cm-mainweather.cjs.entry.js.map