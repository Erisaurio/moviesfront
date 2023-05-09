import axios from 'axios';
import { BaseComentarioseUrl } from './constantes';

    const ObtenerComentaios = async () => {
        let response;

        try {
            response = await axios.get(BaseComentarioseUrl);
        } catch (e) {
            throw new Error(e.message)
        }
        
        return response?.data ? response?.data : null;
    }

    const ObtenerComentaiosUsuario = async (id_user) => {
        let response;
        
        try {
            response = await axios.get(BaseComentarioseUrl + '/Users/' + id_user);
        } catch (e) {
            throw new Error(e.message)
        }
        
        return response?.data ? response?.data : null;
    }

    const ObtenerComentaiosMovie = async (id_movie) => {
        let response;
        
        try {
            response = await axios.get(BaseComentarioseUrl + '/Movies/' + id_movie);
        } catch (e) {
            throw new Error(e.message)
        }
        
        return response?.data ? response?.data : null;
    }


    const CrearComentario = async (nombre, comentario, movieid, usuarioid, picture) => {
        let response;
        
        try {
            response = await axios.post(BaseComentarioseUrl, {  name: nombre, Comentario: comentario, movieid: movieid, 
                Usuarioid: usuarioid, movieidtxt: movieid, Usuarioidtxt:  usuarioid, UsuarioPic: picture });
        } catch (e) {
            throw new Error(e.message)
        }
    
        return response?.data ? response?.data : null
    }

export { ObtenerComentaios, ObtenerComentaiosUsuario, ObtenerComentaiosMovie,CrearComentario};