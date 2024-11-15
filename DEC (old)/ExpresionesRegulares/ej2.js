document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;

    document.querySelectorAll('.error').forEach(function(span) {
        span.textContent = '';
    });

    let nombre = document.getElementById('nombre').value;
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        document.getElementById('nombreError').textContent = 'El nombre solo puede contener letras.';
        isValid = false;
    }

    let apellidos = document.getElementById('apellidos').value;
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellidos)) {
        document.getElementById('apellidosError').textContent = 'Los apellidos solo pueden contener letras.';
        isValid = false;
    }

    let dni = document.getElementById('dni').value;
    if (!/^\d{8}[A-Za-z]$/.test(dni)) {
        document.getElementById('dniError').textContent = 'El DNI debe tener 8 dígitos seguidos de una letra.';
        isValid = false;
    }

    let telefono = document.getElementById('telefono').value;
    if (!/^\d{9}$/.test(telefono)) {
        document.getElementById('telefonoError').textContent = 'El teléfono debe tener 9 dígitos.';
        isValid = false;
    }

    let email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'El email no es válido.';
        isValid = false;
    }

    let usuario = document.getElementById('usuario').value;
    if (!/^(?=.*[0-9])(?=.*[^\w\s]).{8,}$/.test(usuario)) {
        document.getElementById('usuarioError').textContent = 'El nombre de usuario debe tener al menos 8 caracteres, incluir un número y un signo de puntuación.';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});