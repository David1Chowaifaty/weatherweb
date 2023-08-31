'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c414da9.js');
const utils = require('./utils-75bee3ec.js');

const cmDateCss = ":host{display:block}h2,p{margin:0}div,.today{margin-bottom:10px}";

const CmDate = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, this.isToday ? (index.h("h2", { class: 'today' }, "Today")) : (index.h("div", null, index.h("h2", null, utils.daysOfWeek[this.newDate]), index.h("p", null, utils.formatDate(new Date(this.date)))))));
  }
  static get watchers() { return {
    "date": ["handleDateChange"]
  }; }
};
CmDate.style = cmDateCss;

exports.cm_date = CmDate;

//# sourceMappingURL=cm-date.cjs.entry.js.map