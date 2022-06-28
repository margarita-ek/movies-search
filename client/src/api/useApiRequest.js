import { useEffect } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { fetch, err, success } from "../toolkitRedux/actions";

export const useApiRequest = () => {
    const dispatch = useDispatch()

    useEffect(()  => {
        const fetchData = async () => {
            dispatch(fetch(true))
            try {
                const result = await axios('/api/movies',)
                    .then(res => dispatch(success(res.data))) 
                dispatch(fetch(false))
            } catch (error) {
                dispatch(err())
                console.log("ERROR in fetchData: ", error)
            }
        }
        fetchData()
    }, [])
    return
}

