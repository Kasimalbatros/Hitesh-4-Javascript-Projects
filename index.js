const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {  //setInterval Is executing continually.
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

