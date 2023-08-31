'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c414da9.js');
const utils = require('./utils-75bee3ec.js');

const cmMenuCss = ":host{display:block;position:relative}:host([opened]) .container{display:block}.container{background:white;width:15rem;position:absolute;right:0;box-shadow:36px 35px 47px -4px rgba(0, 0, 0, 0.07);border-radius:10px;display:none;z-index:100;padding:10px;top:40px}button{border:0;padding:10px;border-radius:5px;background-color:rgb(243, 243, 243);cursor:pointer}";

const CmMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.opened = false;
    this.selectedDate = '';
  }
  handleMenuItemClicked(ev) {
    const data = JSON.parse(ev.detail);
    this.selectedDate = utils.daysOfWeek[new Date(data.date).getDay()];
    this.toggleOpened();
  }
  toggleOpened() {
    this.opened = !this.opened;
  }
  render() {
    return (index.h(index.Host, null, index.h("button", { onClick: this.toggleOpened.bind(this) }, this.selectedDate !== '' ? this.selectedDate : 'Choose a date'), index.h("div", { class: 'container' }, index.h("slot", null))));
  }
};
CmMenu.style = cmMenuCss;

exports.cm_menu = CmMenu;

//# sourceMappingURL=cm-menu.cjs.entry.js.map