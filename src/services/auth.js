import axios from 'axios';

export const login = ({ email, password }) =>
    axios.post('https://reqres.in/api/login', {
        email,
        password
});
