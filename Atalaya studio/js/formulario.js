const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const formMessage = document.getElementById('formMessage');

    let valid = true;

    if (name.length < 2) {
        document.getElementById('nameError').textContent =
            'Ingrese un nombre válido.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (!email.includes('@')) {
        document.getElementById('emailError').textContent =
            'Ingrese un correo electrónico válido.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (message.length < 10) {
        document.getElementById('messageError').textContent =
            'El mensaje debe tener al menos 10 caracteres.';
        valid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    if (!valid) {
        return;
    }

    /*
     * En una aplicación real, estos datos se enviarían
     * mediante HTTPS a un backend que volvería a validar
     * toda la información.
     */

    formMessage.textContent =
        'Mensaje validado correctamente.';

    contactForm.reset();

});