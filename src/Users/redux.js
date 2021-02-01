const FETCH_USERS_REQUESTED = 'users/FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'users/FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'users/FETCH_USERS_FAILED';

const INITIAL_STATE = {
    users: [],
    isLoading: false,
    isError: false
}
const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED});
const fetchSucceeded = data => ({ type: FETCH_USERS_SUCCEEDED, payload: data});
const fetchFailed = () => ({ type: FETCH_USERS_FAILED});

export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchRequested());
            fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data =>  {
                dispatch(fetchSucceeded(data.response));
            })
            .catch(error => {
                dispatch(fetchFailed())
            });
    };
};

export default function userReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                users: action.payload
            };
        case FETCH_USERS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
};