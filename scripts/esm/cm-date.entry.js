import { r as registerInstance, h, H as Host } from './index-8edbca2c.js';
import { d as daysOfWeek, f as formatDate } from './utils-bdbd8655.js';

const cmDateCss = ":host{display:block}h2,p{margin:0}div,.today{margin-bottom:10px}";

const CmDate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  static get watchers() { return {
    "date": ["handleDateChange"]
  }; }
};
CmDate.style = cmDateCss;

export { CmDate as cm_date };

//# sourceMappingURL=cm-date.entry.js.map