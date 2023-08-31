import { r as registerInstance, c as createEvent, h, H as Host } from './index-8edbca2c.js';
import { d as daysOfWeek, f as formatDate } from './utils-bdbd8655.js';

const cmWeatherCss = ":host{display:block}.temperature-range{font-weight:bold;margin-bottom:10px;display:flex;align-items:center}.temp-max{font-size:20px}.temp-min{color:#64748b}.weather-button{display:flex;align-items:center;flex-direction:column;border:0;background:transparent;cursor:pointer;box-shadow:36px 35px 47px -4px rgba(0, 0, 0, 0.07);border-radius:10px;padding:1rem;width:15rem;transition:all 0.3s ease-in-out;height:18rem}.weather-button:hover{transform:scale(1.05)}.sunmoon-image{height:60px;width:60px;margin-bottom:30px;margin-top:20px}p,h2{margin:0}.date{font-size:16px;margin-top:20px}";

const CmWeather = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dayclicked = createEvent(this, "dayclicked", 7);
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
  static get watchers() { return {
    "data": ["changedData"]
  }; }
};
CmWeather.style = cmWeatherCss;

export { CmWeather as cm_weather };

//# sourceMappingURL=cm-weather.entry.js.map