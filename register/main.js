const registerSubmit = (event) => {
    event.preventDefault();

    var formData = new FormData(event.target);
    var values = Object.fromEntries(formData.entries());
    localStorage.setItem('user', values);
    window.location.href = "../dashboard";
}