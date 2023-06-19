var loading = document.getElementById("loading");
var textareaHandle = document.getElementById('characterCount__textarea');

const showLoading = () => { loading.style.display = "block"; }

const hideLoading = () => { loading.style.display = "none"; }

const toggleMenu = (element) => {
  var containerResults = document.getElementById("container__results");
  var childrensResults = containerResults.querySelectorAll("div");

  for (var i = 0; i < childrensResults.length; i++) {
    var divChildren = childrensResults[i];
    divChildren.style.display = "none"
  }

  element.style.display = "flex";

  switch (element.id) {
    case 'counter':
      counterFunction()
      break;
    case 'countdown':
      countdownFunction()
      break;
    case 'stopwatch':
      stopwatchFunction()
      break;
    case 'sizeScreen':
      sizeScreenFunction()
      break;
    case 'digitalClock':
      digitalClockFunction()
      break;
    case 'characterCount':
      characterCountFunction()
      break;
    default:
      console.log("Opción no válida");
  }
}

const signOff = () => {
  localStorage.removeItem('user')
  window.location.href = "../index.html";
}

const counterFunction = () => { console.log('counter') }

const countdownFunction = () => { console.log('countdown') }

const stopwatchFunction = () => { console.log('stopwatch') }

const sizeScreenFunction = () => {
  var preview = document.getElementById('size'); 
  preview.textContent = `${window.innerWidth} x ${window.innerHeight}`;
}

const digitalClockFunction = () => { 
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if(hours == 0) {
    hours = 12;
  } else if (hours >= 12) {
    hours = hours - 12;
    period = 'PM';
  }

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var time = hours + ":" + minutes + ":" + seconds + " " + period;
  document.getElementById("clock").innerHTML = time;
}

const characterCountFunction = () => { 
  var result = document.getElementById('characterCount__count');
  var count = (textareaHandle.value).length;
  
  result.textContent = `${count}`;
}


showLoading();
setInterval(digitalClockFunction, 1000);

window.onresize()
window.addEventListener('load', hideLoading);
textareaHandle.addEventListener('input', characterCountFunction)
