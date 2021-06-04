import { addUserApi, deleteUserApi, loadUsersApi, updateUserApi } from "../helper/api";
import history from "../helper/history";
import { CREATE_USER, DELETE_USER, EDIT_USER, FETCH_USERS } from "./types";

export const fetchUsers = () => async dispatch => {
    try 
    {
        const response = await loadUsersApi();
        dispatch({
            type: FETCH_USERS,
            payload: response
        });
    } catch(error) 
    {
        console.log(error);
    }
}

export const createUser = userCreate => async dispatch => {
    try {
        const response = await addUserApi(userCreate);
        dispatch({ 
            type: CREATE_USER, 
            payload: response
        });
        history.push("/")
    } catch(error) {
        console.log(error);
    }
}

export const editUser = userEdit => async dispatch => {
    try {
        const response = await updateUserApi(userEdit)
        dispatch({
            type: EDIT_USER,
            payload: response
        })
        history.push('/')
    } catch(error) {
        console.log(error);
    }
}

export const deleteUser = userDelete => async dispatch => {
    try {
        const response = await deleteUserApi(userDelete)
        dispatch({
            type: DELETE_USER,
            payload: response
        })
    } catch(error) {
        console.log(error)
    }
}