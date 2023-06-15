"use strict";
const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const email = document.querySelector('input[type="email"]');
const button = document.querySelector('button[type="submit"]');
let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
button.addEventListener("click", (event) => {
    event.preventDefault();
    if (firstName.value.trim().length === 0) {
        const errorMsg = document.createElement("p");
        errorMsg.innerHTML = "性を入力してください。";
        errorMsg.style.color = "red";
        firstName.parentElement.appendChild(errorMsg);
    }
    if (lastName.value.trim().length === 0) {
        const errorMsg = document.createElement("p");
        errorMsg.innerHTML = "名を入力してください。";
        errorMsg.style.color = "red";
        lastName.parentElement.appendChild(errorMsg);
    }
    if (!emailRegex.test(email.value)) {
        const errorMsg = document.createElement("p");
        errorMsg.innerHTML = "正しいメールアドレスを入力してください。";
        errorMsg.style.color = "red";
        email.parentElement.appendChild(errorMsg);
    }
});
//# sourceMappingURL=app.js.map