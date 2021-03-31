import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el useEffect', () => {

    test('debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Music'));

        const { data, loading } = result.current;

        await waitForNextUpdate()
       
        expect( data ).toEqual( [] )
        expect( loading ).toBe( true )
    })

    test('debe indicar cuantas imagenes se muestran', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Music'));
        await waitForNextUpdate()
        
        const { data, loading } = result.current;

        
       
        expect( data.length ).toBe( 10 )
        expect( loading ).toBe( false )
    })

})