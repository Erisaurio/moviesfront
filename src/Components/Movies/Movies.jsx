import './Movies.css'
import Header from "../HeaderYFooter/Header";
import Footer from '../HeaderYFooter/Footer';
import {useState, useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import {GetMovies} from '../../Services/movies.service';

import poster from '../Assets/Poster.png';

const Movies = () => {
    
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

    useEffect(() => {
        
        showMovies();
                
    }, []);

    return (

       

       <div className="Main">

            <Header/>
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
                                //navigate(`/DetallePelicula/${Movie.Name}`)
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

export default Movies;