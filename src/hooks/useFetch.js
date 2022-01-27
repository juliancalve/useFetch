import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cleanErrorAction, loadingAction, setErrorAction } from '../redux/api';

const useFetch = ({ service, onSuccess = () => {}, globalLoader }) => {

    const dispatch = useDispatch();

    const { isError } = useSelector(store => store.apiReducer );
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiCall = async () => {
        setLoading(true);
        globalLoader && dispatch(loadingAction())
        try{
            const response = await service();
            console.log(response);
            if(response.status === 200) {
                setData(response.data);
                onSuccess();
            } else {
                dispatch(setErrorAction({message: response.data.error}));
                setError(response.data.error);
            }
            setLoading(false);
        } catch( error ){
            dispatch(setErrorAction({message: error.message}));
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if(isError) {
            setTimeout(() => {
                dispatch(cleanErrorAction())
            }, 4000);
        }
    }, [isError])


    return [data, error, loading, apiCall];
}

export default useFetch
