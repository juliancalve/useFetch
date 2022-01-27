import { useState } from 'react'
import useFetch from '../hooks/useFetch';
import { login } from '../services/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        
    const [data, error, loading, apiCall] = useFetch({
        service: () => login({ email, password }),
        globalLoader: true
    });

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    // const onSubmit = async () => {
    //     try {
    //         const response = await login({ email, password });
    //         console.log(response);
    //         const json = response.data;
    //         console.log(json);
    //     } catch( error ) {
    //         alert( error );
    //     }
    // }

    return (
        <div>
            <input placeholder='Email' value={email} onChange={handleEmailChange} />
            <input placeholder='Password' value={password} onChange={handlePasswordChange}/>
            <p style={{color: 'red'}}>{error}</p>
            <button disabled={loading} onClick={apiCall}>Submit</button>
            <p>{data?.token}</p>
        </div>
    )
}

export default Login
