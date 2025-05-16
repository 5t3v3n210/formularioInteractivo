document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que se recargue la página

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message');

    if (name === '' || email === '') {
    message.textContent = 'Por favor completa todos los campos.';
    message.style.color = 'red';
    } else if (!email.includes('@') || !email.includes('.')) {
    message.textContent = 'Correo electrónico no válido.';
    message.style.color = 'red';
    } else {
    message.textContent = `¡Gracias por contactarnos, ${name}!`;
    message.style.color = 'green';
    }
});
