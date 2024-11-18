const CART_API_URL = 'http://localhost:8080/orders'; // Cambia al endpoint de tu backend

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function loadCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = cart
    .map(
      item => `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>Cantidad: ${item.quantity}</p>
        <p>Precio: $${item.price * item.quantity}</p>
      </div>
    `
    )
    .join('');
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  fetch(CART_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: cart }),
  })
    .then(response => response.json())
    .then(data => {
      alert('Orden completada con éxito');
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      loadCart();
    })
    .catch(err => console.error(err));
});

document.addEventListener('DOMContentLoaded', loadCart);
