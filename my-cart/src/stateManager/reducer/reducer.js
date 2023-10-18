
const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingQuantity = state.items.find((item) => item.id === product.id);
            if (existingQuantity) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                    )
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...product, qty: 1 }]
                };
            }

            case 'INCREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
                ),
            };

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? { ...item, qty: Math.max(item.qty - 1, 0) } : item
                ),
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };

        default:
            return state;
    }
};

export default cartReducer;
