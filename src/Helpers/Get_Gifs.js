

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=H65BYmFOqhXoLMHuaJ5i6CwEQDFbSm5g&q=${ encodeURI( category ) }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( item => {
        return{
            title: item.title,
            id: item.id,
            url: item.images?.downsized.url
        }

    } )
    
 
    return gifs;


}