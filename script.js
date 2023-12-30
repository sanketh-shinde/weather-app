const input = document.querySelector('#input');
const text = document.querySelector('#display');
const button = document.querySelector('#btn');

const APIKEY = "9f7eb30f29534628b32145427231712";
const APIURL = `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=`

const weather = async () => {
  let response = await fetch(`${APIURL}${input.value}`);
  let data = await response.json();
  text.innerHTML = `Weather in ${input.value} is ${data.current.feelslike_c}ºC, ${data.current.condition.text}`
}

button.addEventListener('click', () => {
  weather();
})