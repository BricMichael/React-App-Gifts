import React from 'react';
import { shallow } from "enzyme";
import GifItem from "../../components/GifItem";


describe('Pruebas en el componente ¡¡GigItem!!', () => {

    const title = 'Title image';
    const url = 'https://www.images/gifs/limit:10/.com';

    const wrapper = shallow(<GifItem  title = { title } url={ url } />);
    const img = wrapper.find('img'); //reutilizacion de variable

    test('Capture del jsx componente GifItem', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Asegurarse que la etiqueta <p> este usando el props title', () => {
        const p = wrapper.find('p').text()
        
        expect( p ).toBe( title )

    });

    test('Asegurarse de la src y alt propiedades, de la etiqueta <img> este usando los  props', () => {
        const src = img.prop('src');
        const alt = img.prop('alt');

        expect( src ).toBe( url );
        expect( alt ).toBe( title )
       
    });

    test('La <img> debe tener la className = animate__bounceIn', () => {
        const div = wrapper.find('div').prop('className').includes('animate__bounceIn');
        const bool = div ? 'Yes' : 'No';
        
        expect( bool ).toBe( 'Yes' ); 

    });

})