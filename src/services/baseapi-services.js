import { getToken } from './auth-service';

const URL = "http://localhost:3000/";

export const doRequest = async (resource, method, dados='', id='', urlParam ="") =>{

    console.log('enviando dados-=-=-=');
    const options = {
        method: method,
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json',
            authorization: "Bearer "+getToken()
        }
    };
    console.log(options)
    if(!['GET', "DELETE"].includes(method)) options.body = JSON.stringify( dados ) 
    console.log(options)
    const url = URL + resource + urlParam;
    console.log(url)
    return await fetch(url, options );         
}


export const doPublicRequest = async (resource, method, dados='', urlParam ="") =>{

    console.log('enviando dadossdsdfsdfsdfsd');
    const options = {
        method: method,
        headers: {
            "Content-type": 'application/json',
        }
    };
    if(!['GET', "DELETE"].includes(method)) options.body = JSON.stringify( dados ) 
    const url = URL + resource + urlParam;
    console.log('usdfioufsdio')
    console.log(await fetch(url, options ))
    return await fetch(url, options );         
}