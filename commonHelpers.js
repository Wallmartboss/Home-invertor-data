(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&p(s)}).observe(document,{childList:!0,subtree:!0});function m(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function p(t){if(t.ep)return;t.ep=!0;const e=m(t);fetch(t.href,e)}})();const _=document.querySelector(".date_page"),c="http://192.168.1.117:9000/",u="get_status",d="get_mode",f=`${c}${d}`,h=`${c}${u}`;i();o();setInterval(()=>{i(),o()},1e4);function i(){fetch(f).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{n(a)}).catch(a=>{console.error("Fetch error:",a)})}function o(){fetch(h).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{l(a),_.innerHTML=n(a)+l(a)}).catch(a=>{console.error("Fetch error:",a)})}function n(a){return a.mode==="Line Mode"?`<div class="mode_EP">
     <p class="param_title net main">Живлення від мережі </p> </div>`:'<div class="mode_EP"><p class="param_title bat main">Живлення від батарей</p></div>'}function l(a){return`<div class="all_param">
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
