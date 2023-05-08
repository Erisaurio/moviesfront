import axios from 'axios';
import { BaseCast } from './constantes';

const ObtenerCast = async () => {
    let response;

    try {
        response = await axios.get(BaseCast);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const Obtener10Cast = async () => {
    let response;

    try {
        response = await axios.get(BaseCast + '/Some10');
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const CrearCast = async (nombre, photo) => {
    let response;
    
    console.log(nombre);
    debugger
    try {
        response = await axios.post(BaseCast, {name: nombre, photo:photo});
  
        console.log(response.data.data._id)

      // axios({
      //     method: "put",
      //     url: `http://localhost:3001/api/Storage/Cast/${response.data.data._id}`,
      //     data: formData,
      //     headers: { "Content-Type": "multipart/form-data" },
      //   })
      //     .then(function (response2) {
      //       //handle success
      //       console.log(response2);
            
      //     })
      //     .catch(function (response2) {
      //       //handle error
      //       console.log(response2);
            
      //     });
      // return response2?.data ? response2?.data : null
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null
}

const EditCast = async (id_Cast,nombre) => {
    let response;
   
    try {
        response = await axios.put(BaseCast + '/' + id_Cast, {  name: nombre });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

const DeleteCast = async (id_Cast) => {
    let response;

    try {
        response = await axios.delete(BaseCast + '/' + id_Cast);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}

const EditCastImg = async (id_cast,formData) => {
  debugger
    let response;
    axios({
        method: "put",
        url: `http://localhost:3001/api/Storage/Cast/${id_cast}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          
        })
        .catch(function (response) {
          //handle error
          console.log(response);
          
        });
    return response?.data ? response?.data : null
}

export { ObtenerCast, CrearCast, EditCast, DeleteCast, Obtener10Cast };