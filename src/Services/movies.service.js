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

const GetMoviesGenero = async ( genero ) => {
    let response;
    debugger
    try {
        response = await axios.get(BaseUrlPeliculas + "/Genero/" + genero );
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const Get6Movies = async () => {
    let response;

    try {
        response = await axios.get(BaseUrlPeliculas + '/Some6' );
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

const CrearMovie = async (NameMovie,FechaMovie,Sinopsis,Horas,Minutos,Portada,GenerosAr,CastAr,access_token) => {
    let response;
    debugger;
    console.log(typeof(FechaMovie));
    console.log(typeof(Horas));
    console.log(typeof(GenerosAr));
    try {
        response = await axios.post(BaseUrlPeliculas, {  Name: NameMovie, Fecha: FechaMovie, Sinopsis: Sinopsis, Portada: Portada, Horas: Horas, Minutos: Minutos, Generos: GenerosAr, Cast: CastAr }, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const UpdateMovie = async (id_movie,NameMovie,FechaMovie,Sinopsis,Horas,Minutos,Portada,GenerosAr,CastAr,access_token) => {
    let response;
    debugger
    try {                                                                                                                                                         //, Generos: GenerosAr                               
        response = await axios.put(BaseUrlPeliculas + '/' + id_movie , {  Name: NameMovie, Fecha: FechaMovie, Sinopsis: Sinopsis, Portada: Portada, Horas: Horas, Minutos: Minutos, Generos: GenerosAr, Cast:CastAr}, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const DeleteMovie = async (id_movie,access_token) => {
    let response;

    try {
        response = await axios.delete(BaseUrlPeliculas + '/' + id_movie, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          });
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

export { GetMovies, GetMovie, CrearMovie ,UpdateMovie, DeleteMovie, Get6Movies, GetMoviesGenero};