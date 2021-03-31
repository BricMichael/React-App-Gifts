import React from 'react';
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
   
    return(
        <>
            <h2 className = 'color_h2'>{ category }</h2>
            { loading && <p className="card animate__animated animate__flash">Loading</p> }
            <div className = 'card-grip'>
                {

                    images.map( imgs => (

                        <GifItem 
                          key = { imgs.id } 
                          { ...imgs } 
                        />

                    ))
                }   
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;