const initialState = {
    presentsearch: false,
    movies: [],
    subscriptions: [],
    members: [],
    users: [],
    allpermissions: []
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADMOVIES': {
            return { ...state, movies: action.payload }
        }
        case 'LOADSUBSCRIPTIONS': {
            return { ...state, subscriptions: action.payload }
        }
        case 'LOADMEMBERS': {
            return { ...state, members: action.payload }
        }
        case 'LOADUSERS': {
            return { ...state, users: action.payload }
        }
        case 'PSEARCH': {
            return { ...state, presentsearch: action.payload }
        }
        case 'LOADPERMISSIONS': {
            return { ...state, allpermissions: action.payload }
        }
        default:
            return state
    }
}


export default appReducer