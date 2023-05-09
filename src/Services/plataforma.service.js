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

const CrearPlataforma = async (nombre,access_token) => {
    let response;
    console.log(nombre);
    try {
        response = await axios.post(BaseUrlPlataforma, {name: nombre}, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const EditPlataforma = async (id_plataforma,nombre,access_token) => {
    let response;
   
    try {
        response = await axios.put(BaseUrlPlataforma + '/' + id_plataforma, {  name: nombre }, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const DeletePlataforma = async (id_plataforma,access_token) => {
    let response;

    try {
        response = await axios.delete(BaseUrlPlataforma + '/' + id_plataforma, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          });
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

export { ObtenerPlataformas, CrearPlataforma, EditPlataforma, DeletePlataforma };