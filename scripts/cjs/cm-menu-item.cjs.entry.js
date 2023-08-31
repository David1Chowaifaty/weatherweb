'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c414da9.js');
const utils = require('./utils-75bee3ec.js');

const cmMenuItemCss = ":host{display:block}div{display:flex;flex-direction:row;justify-content:space-between;align-items:center;cursor:pointer;padding:0 10px;border-radius:5px}div:hover{background-color:#f8fafc}h2{font-size:15px}p{font-size:15px}";

const CmMenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.itemClicked = index.createEvent(this, "itemClicked", 7);
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
    return (index.h(index.Host, null, index.h("div", { onClick: this.handleClick.bind(this) }, index.h("h2", null, utils.daysOfWeek[new Date(this.weather.date).getDay()]), index.h("p", null, utils.formatDate(this.weather.date)))));
  }
  static get watchers() { return {
    "data": ["changedData"]
  }; }
};
CmMenuItem.style = cmMenuItemCss;

exports.cm_menu_item = CmMenuItem;

//# sourceMappingURL=cm-menu-item.cjs.entry.js.map