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

const ObtenerAdmins = async () => {
    let response;

    try {
        response = await axios.get(BaseUrlUser + "/admins/");
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

const CrearUser = async (nombre, email, pass, rol) => {
    let response;
    console.log(nombre);
    console.log(email);
    console.log(pass);
    try {
        response = await axios.post(BaseUrlUser, {  name: nombre, email: email, password: pass, role:rol });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const EditUser = async (id_user, nombre, email, pass) => {
    let response;
    console.log(nombre);
    console.log(email);
    console.log(pass);
    try {
        response = await axios.put(BaseUrlUser + '/' + id_user, {  name: nombre, email: email, password: pass  });
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

const DeleteUsuario = async (id_user) => {
    let response;

    try {
        response = await axios.delete(BaseUrlUser + '/' + id_user);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}


export { ObtenerUsuarios, ObtenerUsuario, CrearUser, getLogin, EditUser, ObtenerAdmins, DeleteUsuario};