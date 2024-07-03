(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&p(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".date_page"),c="http://georoute.asuscomm.com:5555/",m="get_status",_="get_mode",u=`${c}${_}`,d=`${c}${m}`;i();o();setInterval(()=>{i(),o()},15e3);function i(){fetch(u).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{l.innerHTML=f(a)}).catch(a=>{console.error("Fetch error:",a)})}function o(){fetch(d).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{l.insertAdjacentHTML("beforeend",h(a))}).catch(a=>{console.error("Fetch error:",a)})}function f(a){return a.mode==="Line Mode"?`<div class="mode_EP">
     <p class="param_title net main">Живлення від мережі </p> </div>`:'<div class="mode_EP"><p class="param_title bat main">Живлення від батарей</p></div>'}function h(a){return`<div class="all_param">
     <ul class="param_box">
     <li class="param_item">
     <p class="param_title">Вхідна напруга, В</p>
     <p class="param_data">${a.ac_grid_voltage}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Вхідна частота, Hz</p>
     <p class="param_data">${a.ac_grid_frequency}</p> 
     </li>
 
     <li class="param_item">
     <p class="param_title">Ємність батарей, %</p>
     <p class="param_data">${a.battery_capacity}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Струм заряду батарей, А</p>
     <p class="param_data">${a.battery_charging_current}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Струм розряду батарей, А</p>
     <p class="param_data">${a.battery_discharge_current}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Вольтаж батарей, В</p>
     <p class="param_data">${a.battery_voltage}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Температура інвертору, град.С</p>
     <p class="param_data">${a.inverter_heat_sink_temperature}</p> 
     </li>
     </ul>
     

     <ul class="param_box">
     <li class="param_item">
     <p class="param_title">Вихідна напруга, В </p>
     <p class="param_data">${a.ac_output_voltage} </p> 
     </li>

    <li class="param_item">
     <p class="param_title">Вихідна частота, Hz</p>
     <p class="param_data">${a.ac_output_frequency} </p> 
     </li>
 
    <li class="param_item">
     <p class="param_title"> Навантаження інвертору, %</p>
     <p class="param_data"> ${a.ac_output_load_percent} </p> 
     </li>
    <li class="param_item">
     <p class="param_title">Споживана від інвертору потужність, Вт</p>
     <p class="param_data">${a.ac_output_active_power}</p> 
     </li>
    <li class="param_item">
     <p class="param_title">Споживана від інвертору потужність, ВА</p>
     <p class="param_data">${a.ac_output_apparent_power}</p> 
     </li>
     <li class="param_item">
     <p class="param_title"> Чи заряджаються батареї?</p>
     <p class="param_data"> ${a.is_ac_charging_on}</p> 
     </li>
     </ul>
     </div>
     `}
//# sourceMappingURL=commonHelpers.js.map
