import axios from 'axios';
import { BaseCriticaUrl } from './constantes';

const ObtenerCritica = async () => {
    let response;
   
    try {
        response = await axios.get(BaseCriticaUrl);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const ObtenerCriticasUsuario = async (id_user) => {
    let response;
   
    try {
        response = await axios.get(BaseCriticaUrl + '/Users/' + id_user);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const ObtenerCriticasMovie = async (id_movie) => {
    let response;

    try {
        response = await axios.get(BaseCriticaUrl + '/Movies/' + id_movie);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

export { ObtenerCritica, ObtenerCriticasUsuario, ObtenerCriticasMovie};