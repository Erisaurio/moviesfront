import axios from 'axios';
import { BaseUrlGenero } from './constantes';

const ObtenerGeneros = async () => {
    let response;

    try {
        response = await axios.get(BaseUrlGenero);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const ObtenerGenero = async (id_user) => {
    let response;

    try {
        response = await axios.get(BaseUrlGenero + '/' + id_user);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const CrearGenero = async (Genero,access_token) => {
    let response;

    try {
        response = await axios.post(BaseUrlGenero, {  Genero: Genero  }, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const EditGenero = async (id_genero,Genero,access_token) => {
    let response;
    console.log(id_genero);
    try {
        response = await axios.put(BaseUrlGenero + '/' + id_genero, {  Genero: Genero }, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const DeleteGenero = async (id_Genero,access_token) => {
    let response;

    try {
        response = await axios.delete(BaseUrlGenero + '/' + id_Genero, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          });
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

export { ObtenerGeneros, CrearGenero, DeleteGenero, EditGenero};