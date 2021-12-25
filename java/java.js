
let send = document.querySelector('#send');
let wind = document.querySelector('.container');

send.onclick = ()=> {
  wind.classList.add('active');
  document.write(`<h1 style="text-align:center;">request send</h1>`);
}
