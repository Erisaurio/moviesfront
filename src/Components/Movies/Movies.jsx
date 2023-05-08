import './Movies.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import {GetMovies} from '../../Services/movies.service';
import { ObtenerGeneros } from '../../Services/generos.service';

import poster from '../Assets/Poster.png';

const Movies = () => {
    
    const navigate = useNavigate();
    ///
    const [dataMovies, setMovies] = useState([]);
    const [datageneros, setGeneros] = useState([]);
    ///
    const [selectedG, setFilterGenero] = useState('');
    const [FilterNameMovie, setFilterName] = useState('');

    const showGenero = async () => {
        try {
            ObtenerGeneros()
            .then((response) => {
                const data = response.data;
                setGeneros(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
        } catch (e) {
            console.log(e);
        }
    }


    const showMovies = async () => {
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
        
        showMovies();
        showGenero();
    }, []);

    return (

       

       <div className="Main">

            <Header/>
            <br/>
                <div className="row justify-content-center">

                    <div className="col-7">
                                                        
                        <input style={{'width':'100%'}}
                            type="text"
                            className="input-login"
                            id="Moviename"
                            placeholder="Nombre de la película"
                            onChange={e => setFilterName(e.target.value)} value={FilterNameMovie}
                        />

                    </div>

                    <div className="col-3">
                        <select placeholder='Generos' name="Generos" onChange={e => setFilterGenero(e.target.value)}>
                            <option value="">Género</option>
                            {   
                                ///navigate(`/topic/${props.id}`)
                                datageneros.map((Generos, index) =>
                                                    
                                <option value={Generos.Genero}>{Generos.Genero}</option>
                                ) 
                            }
                        </select>
                    
                        
                    </div>
                    
                </div>

            <hr />

            <div className="row justify-content-center">

             {
                dataMovies != null ?
                <div class="col-md-10 mt-3">
                    <div className="row">
                        {   
                            // dataMovies.map((Movie, index) =>
                            // <div key={index}
                            //     onClick={() => {
                            //         alert(Movie.Name);
                            //         //navigate(`/DetallePelicula/${Movie.Name}`)
                            //     }}
                            //     className="col-4 ">
                                
                            //         <div class="card">
                            //             <div class="card-body">
                            //                 {Movie.Portada == "" ?
                            //                 <img style={{height:"200px", width:"150px"}} src={poster} alt="" />
                            //                 :
                            //                 <img class="profileuser" src={`http://localhost:3001/${Movie.Portada}`}/>
                            //                 }
                            //                 <h5 >Name: {Movie.Name}</h5>
                            //                 <h4 >email: {Movie.Fecha}</h4>
                            //                 <p> pass: {Movie.Portada}</p>
                                            
                            //             </div>
                            //         </div>
                                
                            // </div>
                            // ) 
                            //filter

                            dataMovies.filter((Movie) => {
                                return FilterNameMovie.toLowerCase() == ""  ? Movie
                                : Movie.Name.toLowerCase().includes(FilterNameMovie)
                                
                            }).map((Movie, index) =>
                            <div key={index}
                                onClick={() => {
                                    //alert(Movie.Name);
                                    navigate(`/DetallePelicula/${Movie.Name}`)
                                }}
                                className="col-4 ">
                                
                                    <div class="card">
                                        <div class="card-body">
                                            {Movie.Portada == "" ?
                                            <img style={{height:"200px", width:"150px"}} src={poster} alt="" />
                                            :
                                            <img class="profileuser" src={`http://localhost:3001/${Movie.Portada}`}/>
                                            }
                                            <h5 >Name: {Movie.Name}</h5>
                                            <p> sipn: {Movie.Promedio}</p>
                                            <p> {Movie.Horas}:{Movie.Minutos}</p>
                                            <p> sipn: {Movie.Sinopsis}</p>
                                            <h4 >email: {Movie.Fecha}</h4>
                                            <p> img: {Movie.Portada}</p>
                                            
                                        </div>
                                    </div>
                                
                            </div>
                            ) 

                            //Endfilter
                        }
                    </div>

                </div>
                :
                <div className="col-12">
                    <h3>sin Peliculas</h3>
                </div>
             }
            </div>
            

            <Footer/>

        </div>

       


    );
}

export default Movies;