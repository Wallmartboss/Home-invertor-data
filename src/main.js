const date_page = document.querySelector('.date_page');

const url = "http://192.168.1.117:9000/"; 
// const url = "http://georoute.asuscomm.com:5555/"; 
const status_EP = "get_status";
const mode_EP = "get_mode";
const warnings_EP = "get_warnings"; 

const modeUrl = `${url}${mode_EP}`;
const statusUrl = `${url}${status_EP}`;
const warningsUrl = `${url}${warnings_EP}`;


mode();
statusEP()

const setUserTimerId = setInterval(() => {
  mode();
  statusEP()
}, 15000);

  function mode() {
    fetch(modeUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        date_page.innerHTML = markup_mode(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  function statusEP() {
    fetch(statusUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        date_page.insertAdjacentHTML("beforeend", markup_status(data))
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };
  

function markup_mode (data) {
  if (data["mode"]==="Line Mode") {
  return (`<div class="mode_EP">
     <p class="param_title net main">Живлення від мережі </p> </div>`)}
  else { return (`<div class="mode_EP"><p class="param_title bat main">Живлення від батарей</p></div>`)};
};

function markup_status (data) {
  return (`<div class="all_param">
     <ul class="param_box">
     <li class="param_item">
     <p class="param_title">Вхідна напруга, В</p>
     <p class="param_data">${data['ac_grid_voltage']}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Вхідна частота, Hz</p>
     <p class="param_data">${data['ac_grid_frequency']}</p> 
     </li>
 
     <li class="param_item">
     <p class="param_title">Ємність батарей, %</p>
     <p class="param_data">${data['battery_capacity']}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Струм заряду батарей, А</p>
     <p class="param_data">${data['battery_charging_current']}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Струм розряду батарей, А</p>
     <p class="param_data">${data['battery_discharge_current']}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Вольтаж батарей, В</p>
     <p class="param_data">${data['battery_voltage']}</p> 
     </li>

     <li class="param_item">
     <p class="param_title">Температура інвертору, град.С</p>
     <p class="param_data">${data['inverter_heat_sink_temperature']}</p> 
     </li>
     </ul>
     

     <ul class="param_box">
     <li class="param_item">
     <p class="param_title">Вихідна напруга, В </p>
     <p class="param_data">${data['ac_output_voltage']} </p> 
     </li>

    <li class="param_item">
     <p class="param_title">Вихідна частота, Hz</p>
     <p class="param_data">${data['ac_output_frequency']} </p> 
     </li>
 
    <li class="param_item">
     <p class="param_title"> Навантаження інвертору, %</p>
     <p class="param_data"> ${data['ac_output_load_percent']} </p> 
     </li>
    <li class="param_item">
     <p class="param_title">Споживана від інвертору потужність, Вт</p>
     <p class="param_data">${data['ac_output_active_power']}</p> 
     </li>
    <li class="param_item">
     <p class="param_title">Споживана від інвертору потужність, ВА</p>
     <p class="param_data">${data['ac_output_apparent_power']}</p> 
     </li>
     <li class="param_item">
     <p class="param_title"> Чи заряджаються батареї?</p>
     <p class="param_data"> ${data['is_ac_charging_on']}</p> 
     </li>
     </ul>
     </div>
     `)
};