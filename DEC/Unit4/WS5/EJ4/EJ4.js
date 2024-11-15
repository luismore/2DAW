const form = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitButton');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const agreeCheckbox = document.getElementById('agree');

function validateForm() {
    const isPasswordMatch = passwordInput.value === confirmPasswordInput.value;
    const isAgreeChecked = agreeCheckbox.checked;


    if (isPasswordMatch && isAgreeChecked) {
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('enabled');
    }
}
passwordInput.addEventListener('input', validateForm);
confirmPasswordInput.addEventListener('input', validateForm);
agreeCheckbox.addEventListener('change', validateForm);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
});
