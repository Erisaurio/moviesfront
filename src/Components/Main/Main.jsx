import './main.css'
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    
    const navigate = useNavigate();
   

    return (

       

       <div className="Main">

            <Header/>

            <div className="div" id="main" class="container" >Main

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

                <div className="row mt-3">

                    <div className="col-3" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Register </h5>
                            <h4 > </h4>
                            <button onClick={() => {
                              
                              navigate('/Register');  
                                                                               
                            }}>crear Pelis</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >User </h5>
                            <h4 > </h4>
                            <button>crear Pelis</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Admin </h5>
                            <h4 > </h4>
                            <button>crear Pelis</button>
                            </div>
                        </div>             
                    </div>
                    <div className="col-3" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >crear Pelis </h5>
                            <h4 > </h4>
                            <button>crear Pelis</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >User </h5>
                            <h4 > </h4>
                            <button onClick={() => {
                              
                               
                                                                               
                            }}>crear Pelis</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Pelicula </h5>
                            <h4 > </h4>
                            <button>crear Pelis</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Busqueda</h5>
                            <h4 > </h4>
                            <button>crear Pelis</button>
                            </div>
                        </div>             
                    </div>
                    <div className="col-3" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Login </h5>
                            <h4 > </h4>
                            <button>crear Pelis</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer/>

        </div>

       


    );
}

export default Main;