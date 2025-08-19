let password = document.getElementById("password");
let conpassword = document.getElementById("confirm-password");
let signupbtn = document.getElementById("create");
let names = document.querySelector("#name");
let email = document.querySelector("#email");
let passwordMismatchMessage = document.querySelector(".password-mismatch");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");


signupbtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const isPasswordMatch = password.value === conpassword.value;
    const isNameValid = names.value.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const hasSpecialChar = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/.test(password.value);

    if(isPasswordMatch && isNameValid && isEmailValid){
        if(hasSpecialChar){
            modal.style.display = "none";
            window.location.href = "home.html";
        }
        else{
            passwordMismatchMessage.innerHTML="Please include a special character";
            modal.style.display = "block";
        }
    }
    else{
        console.log("Password Mismatched");
        modal.style.display = "block";
    }
})

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
