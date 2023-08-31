import { r as registerInstance, c as createEvent, h, H as Host } from './index-8edbca2c.js';
import { d as daysOfWeek, f as formatDate } from './utils-bdbd8655.js';

const cmMenuItemCss = ":host{display:block}div{display:flex;flex-direction:row;justify-content:space-between;align-items:center;cursor:pointer;padding:0 10px;border-radius:5px}div:hover{background-color:#f8fafc}h2{font-size:15px}p{font-size:15px}";

const CmMenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClicked = createEvent(this, "itemClicked", 7);
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
  static get watchers() { return {
    "data": ["changedData"]
  }; }
};
CmMenuItem.style = cmMenuItemCss;

export { CmMenuItem as cm_menu_item };

//# sourceMappingURL=cm-menu-item.entry.js.map