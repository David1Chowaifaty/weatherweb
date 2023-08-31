import { r as registerInstance, h, H as Host } from './index-8edbca2c.js';
import { d as daysOfWeek } from './utils-bdbd8655.js';

const cmMenuCss = ":host{display:block;position:relative}:host([opened]) .container{display:block}.container{background:white;width:15rem;position:absolute;right:0;box-shadow:36px 35px 47px -4px rgba(0, 0, 0, 0.07);border-radius:10px;display:none;z-index:100;padding:10px;top:40px}button{border:0;padding:10px;border-radius:5px;background-color:rgb(243, 243, 243);cursor:pointer}";

const CmMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opened = false;
    this.selectedDate = '';
  }
  handleMenuItemClicked(ev) {
    const data = JSON.parse(ev.detail);
    this.selectedDate = daysOfWeek[new Date(data.date).getDay()];
    this.toggleOpened();
  }
  toggleOpened() {
    this.opened = !this.opened;
  }
  render() {
    return (h(Host, null, h("button", { onClick: this.toggleOpened.bind(this) }, this.selectedDate !== '' ? this.selectedDate : 'Choose a date'), h("div", { class: 'container' }, h("slot", null))));
  }
};
CmMenu.style = cmMenuCss;

export { CmMenu as cm_menu };

//# sourceMappingURL=cm-menu.entry.js.map