export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch('/products');
        const products = await response.json();
        dispatch({ type: 'SET_PRODUCTS', payload: products });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

export const fetchOrders = () => async (dispatch) => {
    try {
        const response = await fetch('/orders');
        const orders = await response.json();
        dispatch({ type: 'SET_ORDERS', payload: orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
};
