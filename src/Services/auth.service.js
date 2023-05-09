import axios from 'axios';
import { Baserauth } from './constantes';

const getLoginT = async (email, pass) => {
    let response;
    console.log(email);
    console.log(pass);
    try {
        response = await axios.post(Baserauth, {  email: email, password: pass });
        console.log(response);
    } catch (e) {
        throw new Error(e.message)
    }
    
    return response?.data ? response?.data : null;
}



export { getLoginT};