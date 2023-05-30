import './Movies.css'
//import Header from "../HeaderYFooter/Header";
import Header from "../Header2/Header";
import Footer from '../HeaderYFooter/Footer';
import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import {GetMovies , GetMoviesGenero} from '../../Services/movies.service';
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

    const filterGenero = async (Genero) => {
        //alert(Genero)
        debugger
        if(Genero != ""){
            
            showMoviesGenero(Genero);
        }
        else{
            
            showMovies();
        }
    }

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

    const showMoviesGenero = async (genero) => {
        try {
            debugger
            GetMoviesGenero(genero)
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

                    <div className="col-6">
                                                        
                        <input style={{'width':'100%'}}
                            type="text"
                            className="input-login"
                            id="Moviename"
                            placeholder="Nombre de la película"
                            onChange={e => setFilterName(e.target.value)} value={FilterNameMovie}
                        />

                    </div>

                    <div className="col-2">
                        <select placeholder='Generos' name="Generos" onChange={e => filterGenero(e.target.value)}>
                            <option value="">Género</option>
                            {   
                                ///navigate(`/topic/${props.id}`)
                                datageneros.map((Generos, index) =>
                                                    
                                <option value={Generos.Genero}>{Generos.Genero}</option>
                                ) 
                            }
                        </select>
                    
                        
                    </div>

                    <div className="col-2">
                        
                    <button className="btn d-block w-100" onClick={() => {
                        //alert(`alert: ${Generos._id}`);  
                        showMovies();                                      
                        }} >Quitar filtros</button>
                        
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
                                className="col-3 ">
                                
                                    <div class="card-DB">
                                        <div class="card-body-DB">
                                            {Movie.Portada == "" ?
                                            <img className='MainImg' src={poster} alt="" />
                                            :
                                            <img className='MainImg' src={`http://localhost:3001/${Movie.Portada}`}/>
                                            }
                                            <h5> {Movie.Name}</h5>
                                            <p> Calificación: {Movie.Promedio}</p>
                                            <p> Tiempo: {Movie.Horas}:{Movie.Minutos} hrs.</p>
                                            {/*<p> sipn: {Movie.Sinopsis}</p>
                                            <h4 >email: {Movie.Fecha}</h4>
                                        <p> img: {Movie.Portada}</p>*/}

                                            {/* genero */}
                                            
                                            {/*<p> {Movie.Generos}</p>*/}
                                            <div className='genres'>
                                                {Movie.Generos.length > 1 ? (
                                                    Movie.Generos.map((genero, index) => (
                                                    <label key={index}>{genero}</label>
                                                    ))
                                                ) : (
                                                    <label>{Movie.Generos}</label>
                                                )}
                                            </div>
                                            
                                            {/* end */}

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