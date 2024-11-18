import { createStore } from './store.js';
import { fetchProducts, fetchOrders } from './actions.js';

document.getElementById('view-products').addEventListener('click', () => {
    store.dispatch(fetchProducts());
});

document.getElementById('view-orders').addEventListener('click', () => {
    store.dispatch(fetchOrders());
});

store.subscribe(() => {
    const state = store.getState();
    const content = document.getElementById('content');
    content.innerHTML = `<pre>${JSON.stringify(state, null, 2)}</pre>`;
});
