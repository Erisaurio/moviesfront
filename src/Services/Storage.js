import axios from 'axios';
import { BaseStorageUrl } from './constantes';

const FormData = require('form-data');

const EditUserImg = async (id_user,formData) => {
    
    let response;
    axios({
        method: "put",
        url: `http://localhost:3001/api/Storage/users/${id_user}`,
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

const EditMovieImg = async (id_movie,formData) => {
  debugger
    let response;
    axios({
        method: "put",
        url: `http://localhost:3001/api/Storage/Movies/${id_movie}`,
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

export { EditUserImg, EditMovieImg};