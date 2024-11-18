const API_URL = 'http://localhost:8080/products'; // Cambiar según tu backend

document.addEventListener('DOMContentLoaded', () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
      productList.innerHTML = products
        .map(
          product => `
          <div class="product">
            <h3>${product.nombre}</h3>
            <p>${product.descripcion}</p>
            <p>$${product.precio}</p>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
          </div>
        `
        )
        .join('');
    })
    .catch(err => console.error(err));
});

function addToCart(productId) {
  console.log(`Producto ${productId} añadido al carrito`);
}
