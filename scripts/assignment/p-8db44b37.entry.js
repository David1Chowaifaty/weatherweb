import{r as t,c as e,h as s,H as a}from"./p-b710bc37.js";import{d as i,f as n}from"./p-9cb96a6f.js";const r=":host{display:block}.temperature-range{font-weight:bold;margin-bottom:10px;display:flex;align-items:center}.temp-max{font-size:20px}.temp-min{color:#64748b}.weather-button{display:flex;align-items:center;flex-direction:column;border:0;background:transparent;cursor:pointer;box-shadow:36px 35px 47px -4px rgba(0, 0, 0, 0.07);border-radius:10px;padding:1rem;width:15rem;transition:all 0.3s ease-in-out;height:18rem}.weather-button:hover{transform:scale(1.05)}.sunmoon-image{height:60px;width:60px;margin-bottom:30px;margin-top:20px}p,h2{margin:0}.date{font-size:16px;margin-top:20px}";const o=class{constructor(s){t(this,s);this.dayclicked=e(this,"dayclicked",7);this.data=undefined;this.weather=undefined}componentWillLoad(){if(this.data!==""){this.weather=JSON.parse(this.data)}}changedData(){this.weather=JSON.parse(this.data);console.log(this.weather)}handleClick(){this.dayclicked.emit(this.data)}render(){if(this.weather===undefined){return null}else{return s(a,null,s("button",{class:"weather-button",onClick:this.handleClick.bind(this)},s("h2",{class:"day-of-week"},i[new Date(this.weather.date).getDay()]),s("p",{class:"date"},n(this.weather.date)),s("cm-sunmoonimage",{class:"sunmoon-image"}),s("p",{class:"temperature-range"},s("cm-temperature",{class:"temp-max",temp:this.weather.temp_max.toString()}),"/ ",s("cm-temperature",{class:"temp-min",temp:this.weather.temp_min.toString()})),s("p",{class:"weather-description"},this.weather.description)))}}static get watchers(){return{data:["changedData"]}}};o.style=r;export{o as cm_weather};
//# sourceMappingURL=p-8db44b37.entry.js.map