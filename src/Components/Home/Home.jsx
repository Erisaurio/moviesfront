import '../HeaderYFooter/NavYFooter.css'
import './Home.css'
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import pelis from '../Assets/pinocho.jpeg';
import Header from "../HeaderYFooter/Header";
import {useState, useRef, useEffect} from "react"
import Footer from '../HeaderYFooter/Footer';
import poster from '../Assets/Poster.png';

import {GetMovies, GetMoviesHighestRated} from '../../Services/movies.service';
{/*import {Search, SearchIcon, SearchIconWrapper, StyledInputBase} from '@mui/icons-material/Search';*/}

const Home = () => {
    const navigate = useNavigate();

    const [dataMovies, setMovies] = useState([]);

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
    


    const showMoviesRating = async () => {
        try {
            GetMoviesHighestRated()
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
                
    }, []);



    const [focusedButton, setFocusedButton] = useState(1);
    
    const handleButtonClick = (index) => {
        setFocusedButton(index);
    };


    return<>
        <Header/>
        <div className="box">
            {/*<div className='search'>
                <i class="fa-solid fa-i-cursor"></i>
            </div>*/}

            <button
                className={focusedButton === 0 ? 'orderButton focused-button' : 'orderButton'}
                onClick={() => {
                        handleButtonClick(0)
                        showMoviesRating()
                    }
                }
            >
            Mejores Puntuadas
            </button>
            <button
                className={focusedButton === 1 ? 'orderButton focused-button' : 'orderButton'}
                onClick={() => {
                    handleButtonClick(1)
                    showMovies()
                }
            }
            >
            Mas Nuevas
            </button>


            {/* Add a button for calling showMoviesRating
            <button onClick={showMoviesRating}>Mejores Calificadas</button>

            <button onClick={showMovies}>Mas Nuevas</button> */}

            <div className='cards'>
            {   
                        dataMovies.map((Movie, index) =>
                        <a onClick={() => {navigate(`/DetallePelicula/${Movie.Name}`)}}>
                            <div className='card hover'>
                                {Movie.Portada == "" ?
                                <img className='posterImage' src={poster}/>
                                :
                                <img className='posterImage' src={`http://localhost:3001/${Movie.Portada}`}/>
                                }

                                <label>{Movie.Name}</label>
                            </div>
                        </a>
                ) 
            }

            </div>

            {/* <div className='cards'>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card hover'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card hover'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card hover'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card hover'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card hover'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
                <a onClick={() => {navigate('/Peli');}}>
                    <div className='card hover'>
                        <img src={pelis}/>
                        <label>Nombre de película</label>
                    </div>
                </a>
            </div> */}
        </div>

        {/* <a onClick={() => {navigate('/NewMovie');}}>
            <div className='newMovie'>
                <i class="fa-solid fa-plus"></i>
            </div>
        </a> */}

        <Footer/>
    </>
}

export default Home;