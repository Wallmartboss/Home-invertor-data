(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const p=document.querySelector(".date_page"),o="http://192.168.1.117:9000/",f="get_status",h="get_mode",g="get_calculated_battery_charge",y=`${o}${h}`,w=`${o}${f}`,$=`${o}${g}`;let s="",r="",c;_();m();u();p.innerHTML=s+r+c;setInterval(()=>{_(),m(),u(),p.innerHTML=s+r+c},6e4);async function _(){await fetch(y).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{s=v(a)}).catch(a=>{console.error("Fetch error:",a)})}async function m(){await fetch(w).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{r=b(a),p.innerHTML=s+r}).catch(a=>{console.error("Fetch error:",a)})}async function u(){await fetch($).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{c=E(a),p.innerHTML=s+r+c}).catch(a=>{console.error("Fetch error:",a)})}function v(a){return a.mode==="Line Mode"?`<div class="mode_EP main">
     <p class="param_title net">Живлення від мережі </p> </div>`:'<div class="mode_EP main"><p class="param_title bat">Живлення від батарей</p></div>'}function b(a){return`<div class="all_param">
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
     `}function E(a){return`<div class="bat_percent">
     <p class="param_title"> Поточний заряд батареї</p>
     <p class="param_data"> ${a.charge_percent}</p> 
       </div>
     `}
//# sourceMappingURL=commonHelpers.js.map
