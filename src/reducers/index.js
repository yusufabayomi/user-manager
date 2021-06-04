import { CREATE_USER, DELETE_USER, EDIT_USER, FETCH_USERS } from "../actions/types";

const initialState = {
    users: [],
    fetchFirstTime: true
}
const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, users: [ ...action.payload ] }
        case EDIT_USER:
            return { ...state, users: state.users.map(user => user.id === action.payload.id ? action.payload : user), fetchFirstTime: false }
        case DELETE_USER:
            return { ...state, users: state.users.filter(user => user.id !== action.payload.id), fetchFirstTime: false }
        case CREATE_USER:
            return { ...state, users: [ action.payload, ...state.users ], fetchFirstTime: false }
        default:
            return state;
    }
}

export default userReducers;