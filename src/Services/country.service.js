import axios from 'axios';
import { BaseUrlCountry } from './constantes';

const ObtenerPaises = async () => {
    let response;

    try {
        response = await axios.get(BaseUrlCountry);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const CrearPais = async (id, nombre) => {
    let response;
    console.log(id);
    console.log(nombre);
    try {
        response = await axios.post(BaseUrlCountry, { Id_pais: id, País: nombre });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

export { ObtenerPaises, CrearPais };