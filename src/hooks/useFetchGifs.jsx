import { useState, useEffect } from 'react';
import { getGifs } from '../Helpers/Get_Gifs';


export const useFetchGifs = ( category ) => {

    const [ object, setObject] = useState({
        data: [],
        loading: true,
    })

    useEffect( () => {
        getGifs( category )
        .then( imgs => {

            setObject({
                data: imgs,
                loading: false

            });

        })

    }, [ category ])

    return object;

}