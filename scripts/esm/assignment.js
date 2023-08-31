import { p as promiseResolve, b as bootstrapLazy } from './index-8edbca2c.js';
export { s as setNonce } from './index-8edbca2c.js';

/*
 Stencil Client Patch Browser v4.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["cm-mainweather",[[1,"cm-mainweather",{"data":[1537],"weather":[32]},[[16,"dayclicked","changeData"],[16,"itemClicked","dropDownData"]]]]],["cm-weather",[[1,"cm-weather",{"data":[1537],"weather":[32]}]]],["cm-menu",[[1,"cm-menu",{"opened":[1540],"selectedDate":[32]},[[16,"itemClicked","handleMenuItemClicked"]]]]],["cm-menu-item",[[1,"cm-menu-item",{"data":[1537],"weather":[32]}]]],["cm-date",[[1,"cm-date",{"date":[513],"isToday":[32]}]]],["cm-sunmoonimage_2",[[1,"cm-sunmoonimage",{"isSunVisible":[32]}],[1,"cm-temperature",{"temp":[513]}]]]], options);
});

//# sourceMappingURL=assignment.js.map