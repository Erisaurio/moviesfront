import axios from 'axios';
import { BaseUrlUser } from './constantes';

const ObtenerUsuarios = async () => {
    let response;

    try {
        response = await axios.get(BaseUrlUser);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const ObtenerUsuario = async (id_user) => {
    let response;

    try {
        response = await axios.get(BaseUrlUser + '/' + id_user);
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
        response = await axios.post(BaseUrlUser, {  name: nombre, email: email, password: pass  });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const getLogin = async (email, pass) => {
    let response;
    console.log(email);
    console.log(pass);
    try {
        response = await axios.get(BaseUrlUser + '/' + email + '/' + pass);
        console.log(response);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

export { ObtenerUsuarios, ObtenerUsuario, CrearUser, getLogin};