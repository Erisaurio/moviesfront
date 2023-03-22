import './main.css'
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import {GetMovies} from '../../Services/movies.service';

const Main = () => {
    
    const navigate = useNavigate();
   
    const [dataMovies, setMovies] = useState([]);

    const showUsers = async () => {
        try {
            GetMovies()
            .then((response) => {
                const data = response.data;
                setMovies(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        
        showUsers();
                
    }, []);

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

                    <div className="col-4" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Register </h5>
                            <h4 > Progreso </h4>
                            <ul> 
                                <li> Funcionalidad 90% </li>
                                    <ol>
                                        <li>Falta usar tikets</li>
                                    </ol>
                                <li> Estilo 0% </li>
                                    <ol>
                                        <li>Falta Estilo</li>
                                    </ol>
                            </ul>
                            <button onClick={() => {
                              
                              navigate('/Register');  
                                                                               
                            }}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Login </h5>
                            <h4 > Progreso </h4>
                            <ul> 
                                <li> Funcionalidad 90% </li>
                                    <ol>
                                        <li>al registar direcionar a login</li>
                                    </ol>
                                <li> Estilo 0% </li>
                                    <ol>
                                        <li>Falta Estilo</li>
                                    </ol>
                            </ul>
                            <button onClick={() => {
                              
                              navigate('/');  
                                                                               
                            }}>Login</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Admin </h5>
                            <h4 > Progreso </h4>
                            <ul> 
                                <li> Funcionalidad 0%, componente no creado </li>

                            </ul>
                            <button >Admin</button>
                            </div>
                        </div>             
                    </div>
                    <div className="col-4" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >User </h5>
                            <h4 > Progreso </h4>
                            <ul> 
                                <li> Funcionalidad 50% </li>
                                    <ol>
                                        <li>poisible mostrar mas datos</li>
                                        <li>usar imgenes</li>
                                        <li>usar y editar editorial</li>
                                    </ol>
                                <li> Estilo 0% </li>
                                    <ol>
                                        <li>Falta Estilo</li>
                                    </ol>
                            </ul>
                            <button onClick={() => {
                              
                              navigate('/User');  
                                                                               
                            }}>User</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >crear Pelis </h5>
                            <h4 > Progreso </h4>
                            <ul> 
                                <li> Funcionalidad 30% </li>
                                    <ol>
                                        <li>Flata imganes</li>
                                        <li>Flata otros campos</li>
                                    </ol>
                                <li> Estilo 0% </li>
                                    <ol>
                                        <li>Falta Estilo</li>
                                    </ol>
                            </ul>
                            <button onClick={() => {
                              
                              navigate('/NewMovie');  
                                                                               
                            }}>crear Pelis</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Peliculas </h5>
                            <h4 > Progreso </h4>
                            <ul> 
                                <li> Funcionalidad 25%, componente creado </li>
                                <li> Conflicto en generos </li>
                                <li> para mostrar rn url http://localhost:3000/DetallePelicula/"Movie" </li>
                            </ul>
                            <button >crear Pelis</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Busqueda</h5>
                            <h4 > Progreso </h4>
                            <ul> 
                                <li> Funcionalidad 0%, componente no creado </li>

                            </ul>
                            <button>crear Pelis</button>
                            </div>
                        </div>             
                    </div>
                    <div className="col-4" >
                        <div class="card">
                            <div class="card-body">
                            <h5 >Error</h5>
                            <h4 > Progreso </h4>
                            <ul> 
                                <li> falta estilo de error no found </li>
                                <li> Para verlo usa cualquier url con /? que no exista vea rutas </li>
                                <li> http://localhost:3000/? </li>
                            </ul>
                            <button>crear Pelis</button>
                            </div>
                        </div>             
                    </div>
                    
                </div>

            </div>

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

            <div class="col-md-12 mt-3">
                   <div className="row">
                    {   
                        dataMovies.map((Movie, index) =>
                        <div key={index}
                            onClick={() => {
                                alert(Movie.Name);
                                navigate(`/DetallePelicula/${Movie.Name}`)
                              }}
                            className="col-4 ">
                               
                                <div class="card">
                                  <div class="card-body">
                                    <h5 >Name: {Movie.Name}</h5>
                                    <h4 >email: {Movie.Fecha}</h4>
                                    <p> pass: {Movie.Portada}</p>
                                    
                                  </div>
                                </div>
                            
                        </div>
                      ) 
                    }
                    </div>

                </div>


            <Footer/>

        </div>

       


    );
}

export default Main;