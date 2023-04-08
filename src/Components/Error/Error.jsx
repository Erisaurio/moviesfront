import './Error.css'
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

const Error = () => {
    
    const navigate = useNavigate();
   
    let nextId = 0;
    const [Moviegeneros, setMG] = useState([]);
    const [generos, setGeneros] = useState([]);


    
    useEffect(() => {
        

       
            
                
    }, []);

    return (
       <div className="Error">
            <div className="div" id="main" class="container" >Error
                <br/>
                <div className="row">

                    <div className="col-3" style={{backgroundColor: "lightblue"}}>col-4
                    </div>
                    <div className="col-3" style={{backgroundColor: "Blue"}}>col-4
                    </div>
                    <div className="col-3" style={{backgroundColor: "Red"}}>col-4
                                 
                    </div>
                    <div className="col-3" style={{backgroundColor: "Green"}}>col-4
                    </div>
                </div>


            </div>

           

        </div>

       


    );
}

export default Error;