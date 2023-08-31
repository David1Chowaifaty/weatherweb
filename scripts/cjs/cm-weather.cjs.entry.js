'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c414da9.js');
const utils = require('./utils-75bee3ec.js');

const cmWeatherCss = ":host{display:block}.temperature-range{font-weight:bold;margin-bottom:10px;display:flex;align-items:center}.temp-max{font-size:20px}.temp-min{color:#64748b}.weather-button{display:flex;align-items:center;flex-direction:column;border:0;background:transparent;cursor:pointer;box-shadow:36px 35px 47px -4px rgba(0, 0, 0, 0.07);border-radius:10px;padding:1rem;width:15rem;transition:all 0.3s ease-in-out;height:18rem}.weather-button:hover{transform:scale(1.05)}.sunmoon-image{height:60px;width:60px;margin-bottom:30px;margin-top:20px}p,h2{margin:0}.date{font-size:16px;margin-top:20px}";

const CmWeather = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dayclicked = index.createEvent(this, "dayclicked", 7);
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
      return (index.h(index.Host, null, index.h("button", { class: "weather-button", onClick: this.handleClick.bind(this) }, index.h("h2", { class: "day-of-week" }, utils.daysOfWeek[new Date(this.weather.date).getDay()]), index.h("p", { class: "date" }, utils.formatDate(this.weather.date)), index.h("cm-sunmoonimage", { class: "sunmoon-image" }), index.h("p", { class: "temperature-range" }, index.h("cm-temperature", { class: "temp-max", temp: this.weather.temp_max.toString() }), "/ ", index.h("cm-temperature", { class: "temp-min", temp: this.weather.temp_min.toString() })), index.h("p", { class: "weather-description" }, this.weather.description))));
    }
  }
  static get watchers() { return {
    "data": ["changedData"]
  }; }
};
CmWeather.style = cmWeatherCss;

exports.cm_weather = CmWeather;

//# sourceMappingURL=cm-weather.cjs.entry.js.map