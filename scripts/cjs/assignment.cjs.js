'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c414da9.js');

/*
 Stencil Client Patch Browser v4.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('assignment.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["cm-mainweather.cjs",[[1,"cm-mainweather",{"data":[1537],"weather":[32]},[[16,"dayclicked","changeData"],[16,"itemClicked","dropDownData"]]]]],["cm-weather.cjs",[[1,"cm-weather",{"data":[1537],"weather":[32]}]]],["cm-menu.cjs",[[1,"cm-menu",{"opened":[1540],"selectedDate":[32]},[[16,"itemClicked","handleMenuItemClicked"]]]]],["cm-menu-item.cjs",[[1,"cm-menu-item",{"data":[1537],"weather":[32]}]]],["cm-date.cjs",[[1,"cm-date",{"date":[513],"isToday":[32]}]]],["cm-sunmoonimage_2.cjs",[[1,"cm-sunmoonimage",{"isSunVisible":[32]}],[1,"cm-temperature",{"temp":[513]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=assignment.cjs.js.map