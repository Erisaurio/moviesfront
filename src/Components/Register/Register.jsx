import './Register.css'
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    
    const navigate = useNavigate();
   

    return (

       

       <div className="Main">


            <div className="div" id="main" class="container" >Refister

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

export default Register;