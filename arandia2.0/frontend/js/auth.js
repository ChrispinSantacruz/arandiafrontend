const LOGIN_API_URL = 'http://localhost:8080/users/login';

document.getElementById('login-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch(LOGIN_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Sesión iniciada') {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = 'index.html';
      } else {
        alert('Credenciales incorrectas');
      }
    })
    .catch(err => console.error(err));
});

const REGISTER_API_URL = 'http://localhost:8080/users/register';

document.getElementById('register-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch(REGISTER_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre: name, email, contraseña: password }),
  })
    .then(response => response.json())
    .then(data => {
      alert('Registro exitoso');
      window.location.href = 'login.html';
    })
    .catch(err => console.error(err));
});

