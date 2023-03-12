import axios from 'axios';
import { BaseUrlPlataforma } from './constantes';

const ObtenerPlataformas = async () => {
    let response;

    try {
        response = await axios.get(BaseUrlPlataforma);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const CrearPlataforma = async (nombre) => {
    let response;
    console.log(nombre);
    try {
        response = await axios.post(BaseUrlPlataforma, {name: nombre});
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

export { ObtenerPlataformas, CrearPlataforma };