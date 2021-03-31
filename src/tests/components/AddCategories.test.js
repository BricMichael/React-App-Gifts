import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import AddCategories from "../../components/AddCategories";


describe('Pruebas en el componente <AddCategories />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategories setCategories = { setCategories }/>);

    beforeEach( () => {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategories setCategories = { setCategories }/>)
    })

    test('Fotografiar el component AddCategories', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('probando el input del form', () => {
        const input = wrapper.find('input').simulate('change', { target: { value: 'pajarosSearch' } })

    });

     test('El submit no debe enviar la informacion', () => {
        const button = wrapper.find('button').simulate('click', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled()

     })
    
    test('Debe llamar al setcategoires y limpiar la caja de texto', () => {
        const input = wrapper.find('input').simulate('change', { target: {value: 'Prueba exitosa'} })
    })


    test('el estado debe limpiarse', () => {
       
        expect(wrapper.find('input').prop('placeholder')).toBe('Write...')
    })

})
