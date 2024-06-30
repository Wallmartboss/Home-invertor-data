
// import { markupGallery } from './js/render-functions';

// const form = document.querySelector('.search-form');
// const input = form.querySelector('input');
// let userData;
// const gallery = document.querySelector('ul.gallery');
// const loader = document.querySelector('.loader');



// const results = getData();
// results.then(({data}) => {
//     const markup = reviewsMarkup(data);
//     // reviewsList.innerHTML = markup;
// })
//   .catch((error) => {
//           console.error('Виникла помилка: ', error);
//       });
  //  const errorMarkup = `<li class="error-review">
  //  <p class="error-review-text">Not Found</p></li>`
  //  return reviewsList.innerHTML = errorMarkup;
// });
// getData();
const url = "http://192.168.1.117:9000/"; 
const status_EP = "get_status";
const mode_EP = "get_mode";
const warnings_EP = "get_warnings"; 
let totalUrl;

totalUrl = `${url}${warnings_EP}`;

fetch(totalUrl)
  .then( response  => {
    console.log(response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Преобразование тела ответа в JSON
  })
  .then(data => {
    // Обработка полученного JSON-объекта
    console.log(data); // Вывод данных в консоль
    const res = JSON.parse(data); // преобразование JSON в объект
    // console.log(res);
    // console.log(res['ac_output_active_power']);
    


    
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  // fetch(url, { mode: 'no-cors' })
  // .then(res => res.json())
  // .then(res => {
  //   this.setState({loaded: true, items: res.items})
  // })
  // .catch(err => {
  //   console.log('OH SHIT:', err)
  //   this.setState({loadError: true})
  // })

  // const myImage = document.querySelector("img");

// const myRequest = new Request("http://192.168.1.117:9000/get_status");

// fetch(myRequest, { mode: 'no-cors' })
//   .then((response) => {
//     console.log("response.type =", response.type); // response.type = 'basic'
//     return response.blob();
//   })
//   .then((myBlob) => {
//     const objectURL = URL.createObjectURL(myBlob);
//     console.log(objectURL);
//     // myImage.src = objectURL;
//   });