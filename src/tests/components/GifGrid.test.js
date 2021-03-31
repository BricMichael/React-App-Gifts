import React from 'react';
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el componente <GifGrid />', () => {

    

    test('Fotografiar el componente', () => {
       

       useFetchGifs.mockReturnValue({
           data: [],
           loading: true
       })

       const wrapper = shallow( <GifGrid category='Perfect' />)
       expect( wrapper ).toMatchSnapshot();
       
    })

    test('Asegurarse de que existe el componente', () => {
        
        const gifs = [{
            url: 'hhtps/images/pngAndjpg.png',
            title: 'user',
            id: 'ABC'
        },{
            url: 'hhtps/images/pngAndjpg.png',
            title: 'user',
            id: 'wxc'
          }
        ]

        
   
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow( <GifGrid category='Perfect' />)

        expect( wrapper ).toMatchSnapshot()

        expect( wrapper.find('p').exists()).toBe( false ) // no deberia haber parrafos 
 
        const component = wrapper.find('GifItem').length;  // accediendo a un componente y su longitud
        expect( component ).toBe( gifs.length )
    })

    

})