

const initialState = {
    localProducts : null
}


export default (state = initialState, action = {}) => {
    switch (action.type){
        case 'API_DATA':
            return {
                ...state,
                localProducts : action.data
            }
            default : 
            return state
    }
}