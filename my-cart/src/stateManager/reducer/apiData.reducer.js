

const initialState = []

const cartReducer = (state = initialState, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingQuantity = state.find((item)=> item.id === product.id)
            if(existingQuantity){
                return state.map((item)=>item.id === product.id ? {...item, qty: item.qty + 1} : item)
            }else{
                return [...state,{...product, qty: 1}]
            }

            

        default:
            return state;
    }
};



export default cartReducer;
