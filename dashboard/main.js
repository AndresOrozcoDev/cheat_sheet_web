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

    element.style.display = "block";
}

const signOff = () => {
    localStorage.removeItem('user')
    window.location.href = "/";
}

showLoading();
window.addEventListener('load', hideLoading);
