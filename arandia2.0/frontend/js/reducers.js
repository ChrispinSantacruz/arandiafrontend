const initialState = {
    products: [],
    orders: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        case 'SET_ORDERS':
            return { ...state, orders: action.payload };
        default:
            return state;
    }
}
