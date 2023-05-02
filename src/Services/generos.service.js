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

const CrearGenero = async (Genero) => {
    let response;

    try {
        response = await axios.post(BaseUrlGenero, {  Genero: Genero  });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const EditGenero = async (id_genero,Genero) => {
    let response;

    try {
        response = await axios.put(BaseUrlGenero + '/' + id_genero, {  Genero: Genero });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const DeleteGenero = async (id_Genero) => {
    let response;

    try {
        response = await axios.delete(BaseUrlGenero + '/' + id_Genero);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

export { ObtenerGeneros, CrearGenero, DeleteGenero, EditGenero};