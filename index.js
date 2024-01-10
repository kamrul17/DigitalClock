const clock = document.querySelector("#clock");
setInterval(function () {
  const date = new Date();
  clock.textContent = date.toLocaleTimeString();
}, 1000);
