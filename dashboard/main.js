var valueCounter = 0;
var apiKey = '674b59719e7fbcdb2fc49ca2edd1ab7d';    // https://openweathermap.org/
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
    case 'sizeScreen':
      sizeScreenFunction()
      break;
    case 'digitalClock':
      digitalClockFunction()
      break;
    case 'characterCount':
      characterCountFunction()
      break;
    case 'weather':
      weatherFunction()
      break;
    default:
      console.log("Opción no válida");
  }
}


const signOff = () => {
  localStorage.removeItem('user')
  window.location.href = "../index.html";
}


const counterFunction = (e) => { 
  var display = document.getElementById('counter__result');
  var idBtn = e.target.id
  switch (idBtn) {
    case 'increment':
      valueCounter += 1;
      break;
    case 'decrement':
      valueCounter -= 1;
      break;
    default:
      valueCounter = 0;
      break;
  }
  display.textContent = valueCounter;
}


const sizeScreenFunction = () => {
  var preview = document.getElementById('size'); 
  preview.textContent = `${window.innerWidth} x ${window.innerHeight}`;
}


const digitalClockFunction = () => { 
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var period = 'AM'

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


const weatherFunction = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( position => {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      getDataLocation(latitude, longitude)
    });
  } else {
    alert("Location off.");
  }
}


const getDataLocation = (latitude, longitude) => {
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      getDataWeather(data.address.county)
    })
    .catch((error) => {
      console.log('Error:', error.message);
    });
}


const getDataWeather = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log('Error:', error.message);
    });
}



showLoading();
setInterval(digitalClockFunction, 1000);


window.addEventListener('load', hideLoading);
textareaHandle.addEventListener('input', characterCountFunction)
