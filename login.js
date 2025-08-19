let email = document.querySelector("#login-email");
let password = document.querySelector("#login-password");
let btn = document.querySelector("#log-in");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const hasStrongPassword = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/.test(password.value);

    if (isEmailValid && hasStrongPassword) {
        modal.style.display = "none";
        window.location.href = "home.html";
    } else {
        modal.style.display = "block";
    }
});


closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
