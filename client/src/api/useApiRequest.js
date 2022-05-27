import { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { fetch, err, success } from "../toolkitRedux/actions";

export const useApiRequest = () => {
    const [responseData, setResponseData] = useState()
    const dispatch = useDispatch()
    const moviesState = useSelector((state)=> state.movies.movies)

    useEffect(()  => {
        const fetchData = async () => {
            dispatch(fetch())
            try {
                const result = await axios('/api/movies',)
                    .then(res => dispatch(success(res.data)))                
            } catch (error) {
                dispatch(err())
                console.log("ERROR in fetchData: ", error)
            }
        }
        fetchData()
    }, [])
    return
}

