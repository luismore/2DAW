const usernameInput = document.getElementById('username');
const submitButton = document.getElementById('submit');
const lowercaseRequirement = document.getElementById('lowercase');
const uppercaseRequirement = document.getElementById('uppercase');
const lengthRequirement = document.getElementById('length');

usernameInput.addEventListener('input', () => {
    const value = usernameInput.value;

    const hasLowercase = /[a-z]/.test(value);
    lowercaseRequirement.classList.toggle('valid', hasLowercase);

    const hasUppercase = /[A-Z]/.test(value);
    uppercaseRequirement.classList.toggle('valid', hasUppercase);

    const isValidLength = value.length >= 6;
    lengthRequirement.classList.toggle('valid', isValidLength);

    const allValid = hasLowercase && hasUppercase && isValidLength;
    submitButton.disabled = !allValid;
    submitButton.classList.toggle('enabled', allValid);
});
