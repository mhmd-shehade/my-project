import { useEffect, useState } from "react";
import axios from "axios";
export default function useFetchApi(url,options={}){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await axios.get(url, options);
            setData(response.data);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(()=>{
        fetchData();
    },[url]);

    return { data, error, isLoading };
}