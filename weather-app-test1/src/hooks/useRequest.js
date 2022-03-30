import {useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useRequest = ( url ) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        axios
        .get(url)
        .then( (results) => {
            setLoading(false);
            setData(results.data);
        })
        .catch((error) => {
            toast.error("Error in fetching the results");
        })
    }, [url])


    return ({
        loading,
         data
        })
}

export default useRequest;