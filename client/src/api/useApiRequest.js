import { useCallback, useState, useEffect } from "react";
import axios from 'axios';

export const useApiRequest = () => {
    const [responseData, setResponseData] = useState()

    useEffect(()  => {
        const fetchData = async () => {
            const result =  await axios('/api/movies',);
            setResponseData(result.data);
        }
        fetchData()
    }, [])

    return responseData
}