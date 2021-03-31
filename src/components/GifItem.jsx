import React from 'react';
import PropTypes from 'prop-types';

const GifItem = ({ url, title }) => {

    return(
        <div className = "card animate__animated animate__bounceIn">

            <img src={ url } alt={ title } className ='imgs'/>
            <p>{title}</p>
        </div>
    );
} 

GifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default GifItem;