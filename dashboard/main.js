var loading = document.getElementById("loading");

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
  window.location.href = "/";
}

const counterFunction = () => { console.log('counter') }
const countdownFunction = () => { console.log('countdown') }
const stopwatchFunction = () => { console.log('stopwatch') }
const sizeScreenFunction = () => { console.log('sizeScreen') }
const digitalClockFunction = () => { console.log('digitalClock') }
const characterCountFunction = () => { console.log('characterCount') }

showLoading();
window.addEventListener('load', hideLoading);
