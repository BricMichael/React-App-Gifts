import React from 'react';
import { shallow } from "enzyme";
import AppGifs from "../../AppGifs";



describe('Pruebas en el componente <AppGifs />', () => {
    const wrapper = shallow( <AppGifs /> )

    test('Mostar el componente', () => {

        expect( wrapper ).toMatchSnapshot()

    })

})


