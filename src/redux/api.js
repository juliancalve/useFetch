const defaultValue = {
    isError: false,
    message: '',
    loading: false
}

const NEW_ERROR = 'NEW_ERROR';
const CLEAN_ERROR = 'CLEAN_ERROR';
const LOADING = 'LOADING';

export default function apiReducer( state = defaultValue, { type, payload }) {
    switch(type){
        case NEW_ERROR: return {...state, isError: true, message: payload.message, loading: false};
        case CLEAN_ERROR: return {...state, ...defaultValue};
        case LOADING: return {...state, loading: true};
        default: return state;
    }
}

export const setErrorAction = ({ message }) => dispatch => {
    dispatch({
        type: NEW_ERROR,
        payload: {
            message
        }
    })
};

export const cleanErrorAction = () => dispatch => {
    dispatch({
        type: CLEAN_ERROR
    })
};

export const loadingAction = () => dispatch => {
    dispatch({
        type: LOADING
    })
}