import React, { useState } from 'react';
import AddCategories from './components/AddCategories';
import GifGrid from './components/GifGrid';


const AppGifs = () => {

     const [ categories, setCategories ] = useState(['Perfect']);
    

    return(
        <>
            <h1>APPGIFS</h1>
            <AddCategories setCategories = { setCategories } />
            <br/>
            <ol>
               {
                   categories.map( item => (

                        <GifGrid 
                         key = { item }
                         category = { item }                                              
                        />
                        )
                    )
               }         
            </ol>
        </>
    ); 
}

export default AppGifs;