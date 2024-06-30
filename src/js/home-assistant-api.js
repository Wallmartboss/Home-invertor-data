
export  function invertorRequest() {
  const searchUrl = `http://192.168.1.117:9000/get_mode`;
  return fetch(searchUrl, { mode: 'no-cors' })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
         });
}