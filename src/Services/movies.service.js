import axios from 'axios';
import { BaseUrlPeliculas } from './constantes';

const GetMovies = async () => {
    let response;

    try {
        response = await axios.get(BaseUrlPeliculas);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const GetMovie = async (Name) => {
    let response;

    try {
        response = await axios.get(BaseUrlPeliculas + '/' + Name);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const CrearMovie = async (NameMovie,FechaMovie,Sinopsis,Horas,Minutos,Portada,GenerosAr) => {
    let response;
    console.log(typeof(FechaMovie));
    console.log(typeof(Horas));
    console.log(typeof(GenerosAr));
    try {
        response = await axios.post(BaseUrlPeliculas, {  Name: NameMovie, Fecha: FechaMovie, Sinopsis: Sinopsis, Portada: Portada, Horas: Horas, Minutos: Minutos, Generos: GenerosAr });
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
        response = await axios.put(BaseUrlPeliculas + '/' + id_user, {  name: nombre, email: email, password: pass  });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}



export { GetMovies, GetMovie, CrearMovie };