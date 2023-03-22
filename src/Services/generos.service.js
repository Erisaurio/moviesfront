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

const ObtenerUsuario = async (id_user) => {
    let response;

    try {
        response = await axios.get(BaseUrlGenero + '/' + id_user);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const CrearUser = async (nombre, email, pass) => {
    let response;
    console.log(nombre);
    console.log(email);
    console.log(pass);
    try {
        response = await axios.post(BaseUrlGenero, {  name: nombre, email: email, password: pass  });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const EditUser = async (id_user,nombre, email, pass) => {
    let response;
    console.log(nombre);
    console.log(email);
    console.log(pass);
    try {
        response = await axios.put(BaseUrlGenero + '/' + id_user, {  name: nombre, email: email, password: pass  });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}



export { ObtenerGeneros };