import './Movie.css'
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

import {useState, useRef, useEffect} from "react"
import { useNavigate, useParams } from 'react-router-dom';

import {GetMovie} from '../../Services/movies.service';

const Movie = () => {
    
    const navigate = useNavigate();
   
    
    const [dataMovie, setDataMovie] = useState([]);

    
    let {Name} = useParams();
    
    const showMovie = async () => {
        try {
            GetMovie(Name)
            .then((response) => {
                const data = response.data;
                setDataMovie(response.data);
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
        
        
        showMovie();  
            
                
    }, []);

    return (

       

       <div className="Main">

            <Header/>

            <div className="div" id="main" class="container" >Movie
                 
                <h1>{Name}</h1>
                <div class="col-md-12 mt-3">
                   <div className="row">
                    {   
                         
                        <div className="col-6">
                               
                                <div class="card">
                                  <div class="card-body">
                                    <h5 >Name: {dataMovie.name}</h5>
                                    <h4 >email: {dataMovie.Fecha}</h4>
                                    <p> pass: {dataMovie.Portada}</p>
                                    <p> role: {dataMovie.Horas} : {dataMovie.Minutos}</p>
                                
                                    <div className="row">
                                    
                                        {   
                                         dataMovie.Generos =! 0 ?
                                          <ul>
                                              <li>{dataMovie.Generos}</li>
                                             
                                          </ul>
                                          ///navigate(`/topic/${props.id}`)
                                            // dataMovie.Generos.map((Genero) =>
                                            //     <div className="col-4 ">
                                                    
                                            //         <ul>
                                            //             <li>{Genero}</li>
                                            //         </ul>
                                                    
                                            //     </div>
                                            
                                            // ) 
                                        :
                                          <div className="col-4 ">
                                                
                                          <ul>
                                              <li>sin generos</li>
                                              
                                          </ul>
                                      
                                          </div>
                                        }

                                    </div>


                                  </div>
                                </div>
       
                        </div>
                      
                    }
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


            </div>

            <Footer/>

        </div>

       


    );
}

export default Movie;