const usernameInput = document.getElementById("username");
const submitButton = document.getElementById("submit");

const lowercaseRequirement = document.getElementById("lowercase");
const uppercaseRequirement = document.getElementById("uppercase");
const lengthRequirement = document.getElementById("length");

usernameInput.addEventListener("input", function() {
    const username = usernameInput.value;
    let isLowercase = /[a-z]/.test(username);
    let isUppercase = /[A-Z]/.test(username);
    let isLength = username.length >= 6;

    // Actualiza el estilo según los requisitos
    lowercaseRequirement.style.color = isLowercase ? "#a8f3a8" : "#fef3d5";
    uppercaseRequirement.style.color = isUppercase ? "#a8f3a8" : "#fef3d5";
    lengthRequirement.style.color = isLength ? "#a8f3a8" : "#fef3d5";

    // Activa o desactiva el botón de enviar
    if (isLowercase && isUppercase && isLength) {
        submitButton.disabled = false;
        submitButton.classList.add("enabled");
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove("enabled");
    }
});