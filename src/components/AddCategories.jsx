import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategories = ({ setCategories }) => {

    const [ input, setInput ] = useState('');

    const handleInput = ( e ) => {
        const event = e.target.value;
        setInput( event );

        console.log('el usuario me ha introducido valores ' + event) // asegurarme de que corre en los test
    }

    const handleButton = (/*e*/) => {
        if ( input.length > 2 ){
            setCategories( data => [ input, ...data ]) 
           // e.preventDefault();  no debe ir, quitar despues de las pruebas
        }
        // console.log('handleSubmit', input )  //pruebas
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        e.target.reset();
    }


    return(
        <>
            <h2>SEARCH GIFS</h2>
            <form action="#" onSubmit = { handleSubmit }>
                <input 
                    type="text"
                    placeholder="Write..."
                    onChange = { handleInput }                
                />  
                <button onClick = { handleButton } >Search</button>
            </form>
        </>
    );
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategories;