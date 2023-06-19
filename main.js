var loading = document.getElementById("loading");

const showLoading = () => { loading.style.display = "block"; }

const hideLoading = () => { loading.style.display = "none"; }

const loginSubmit = (event) => {
    event.preventDefault();

    var msg = document.getElementById('form--error')
    var formData = new FormData(event.target);
    var values = Object.fromEntries(formData.entries());
    if (values.email == '' || values.password == '') {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
        localStorage.setItem('user', values)
        window.location.href = "dashboard";
    }
}

showLoading();
window.addEventListener('load', hideLoading);