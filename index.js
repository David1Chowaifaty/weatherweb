const main = document.querySelector('#main');
const others = document.querySelector("#others");
const menu = document.querySelector("cm-menu")
const apikey = "2cb0ef490184d5a576043727f00691b5"
let lat = 33.8333;
let lon = 35.8333;
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
    });
}
async function fetchWeather(lat, lon) {
    const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
    const res = await fetch(url2);
    const data = await res.json();
    let result = data.list.reduce((acc, current) => {
        const currentDate = new Date(current.dt_txt);
        const existingEntry = acc.find(entry => entry.date.getDay() === currentDate.getDay());
        if (!existingEntry) {
            acc.push({
                humidity: current.main.humidity,
                feels_like: current.main.feels_like,
                temp_max: current.main.temp_max,
                temp_min: current.main.temp_min,
                description: current.weather[0].description,
                date: currentDate,
                windspeed: current.wind.speed
            });
        }
        return acc;
    }, []);

    result.map((d) => {
        if (new Date(d.date).getDay() === new Date().getDay()) {
            const cmWeather = document.createElement('cm-mainweather');
            cmWeather.data = JSON.stringify(d);
            main.appendChild(cmWeather)
        } else {
            const cmWeather = document.createElement('cm-weather');
            cmWeather.data = JSON.stringify(d);
            others.appendChild(cmWeather)
            const menuItem = document.createElement("cm-menu-item")
            menuItem.data = JSON.stringify(d);
            menu.appendChild(menuItem);
        }
    })
}
fetchWeather(lat, lon)
