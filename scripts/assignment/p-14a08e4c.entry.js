import{r as e,h as t,H as i}from"./p-b710bc37.js";import{d as a}from"./p-9cb96a6f.js";const n=":host{display:flex;border-radius:20px;background:#f8fafc;height:min-content;width:30rem;max-width:85%;margin:0 auto;align-items:center;padding:1rem;color:#475569;position:relative;gap:20px}.weather-info{display:flex;flex-direction:column}.weather-header{display:flex;align-items:center}.weather-icon{height:60px;width:60px;position:absolute;right:20px;top:50%;transform:translateY(-50%)}.temperature-range{font-weight:bold;margin-bottom:10px;display:flex;align-items:center}.temp-max{font-size:26px}.temp-min{color:#64748b}.weather-description{margin:0;margin-bottom:10px}.extra-info{display:none;justify-content:space-between;align-items:center;margin-top:20px}.weather-container{display:flex;align-items:center}.sunmoon .icon{display:none}.real-feel,.humidity,.wind{margin-bottom:5px}.humidity-value,.wind-speed{font-weight:bold}@media only screen and (min-width: 768px){:host{justify-content:space-between;width:90%}.weather-icon{display:none}.weather-container{gap:20px}.sunmoon .icon{display:block;height:60px;width:60px}.extra-info{display:block;flex:1;max-width:40%}.details>p{width:100%;display:flex;align-items:center;justify-content:space-between}}@media only screen and (min-width: 992px){:host{width:70%;padding:2rem;height:10rem}.sunmoon .icon{height:100px;width:100px}}";const s=class{constructor(t){e(this,t);this.data=undefined;this.weather=undefined}changeData(e){this.data=e.detail}dropDownData(e){this.data=e.detail}componentWillLoad(){if(this.data!==""){this.weather=JSON.parse(this.data)}}changedData(){this.weather=JSON.parse(this.data)}renderDate(e){const t=(new Date).getDay();const i=new Date(e).getDay();if(t===i){return"Today"}else{return a[i]}}render(){if(this.weather===undefined){return null}else{return t(i,null,t("div",{class:"weather-info"},t("div",{class:"weather-header"},t("div",{class:"weather-icon"},t("cm-sunmoonimage",{class:"icon"})),t("div",{class:"date"},t("cm-date",{date:this.weather.date.toString()}))),t("p",{class:"weather-description"},this.weather.description),t("div",{class:"weather-container"},t("div",{class:"sunmoon"},t("cm-sunmoonimage",{class:"icon"})),t("p",{class:"temperature-range"},t("cm-temperature",{class:"temp-max",temp:this.weather.temp_max.toString()}),"/",t("cm-temperature",{class:"temp-min",temp:this.weather.temp_min.toString()})))),t("div",{class:"extra-info"},t("div",{class:"details"},t("p",{class:"real-feel"},"RealFeel ",t("cm-temperature",{class:"feels-like",temp:this.weather.feels_like.toString()})),t("p",{class:"humidity"},"Humidity ",t("span",{class:"humidity-value"},this.weather.humidity)),t("p",{class:"wind"},"Wind ",t("span",{class:"wind-speed"},this.weather.windspeed)))))}}static get watchers(){return{data:["changedData"]}}};s.style=n;export{s as cm_mainweather};
//# sourceMappingURL=p-14a08e4c.entry.js.map