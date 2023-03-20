import {useState, useRef, useEffect} from "react"

import {ObtenerPaises, CrearPais} from '../../Services/country.service';

import * as React from "react";
import { Link } from "react-router-dom";

const Pais = () => {
    
    const [CountryId, setCountryId] = useState('');
    const [CountryName, setCountryName] = useState('');
   
    const [dataCountries, setDataCountry] = useState([]);
   
    
    useEffect(() => {
        

            ObtenerPaises()
            .then((response) => {
                const data = response.data;
                setDataCountry(response.data);
                console.log(response);              
            })
            .catch((error) => {
                console.log(error);
            });    
            console.log(dataCountries);
            
                
    }, []);

    return (
        <div className='login container-fuid d-flex flex-column justify-content-center align-items-center p-0'>
            <div className='row w-50 d-flex justify-content-center tarjeta-login m-0'>

                <div className='col-12 p-0 d-flex justify-content-center align-items-center'>
                    <form className="row d-flex flex-column g-3">
                        <div className="col-auto text-center">
                            <label className='text-login'>Países</label>
                        </div>
                        <div className="col-auto text-center">
                            
                            <input
                                
                                type="text"
                                className="input-login"
                                id="username"
                                placeholder="Id"
                                onChange={e => setCountryId(e.target.value)} value={CountryId}
                                 />

                        </div>
                        <div className="col-auto text-center">

                            <input
                                
                                type="text"
                                className="input-login"
                                id="Email"
                                placeholder="País"
                                onChange={e => setCountryName(e.target.value)} value={CountryName}
                                />

                        </div>
                       
                        <div className="col-12 d-flex flex-column">

                            <button  type="button" class="btn btn-primary" onClick={() => {
                              
                              CrearPais(CountryId,CountryName);
                                                                                 
                            }}>Crear</button>

                            <Link to="../Login/login.jsx">Users</Link>

                            {/*<Link to="/register">
                                ¿No tienes cuenta? Registrate
                            </Link> */}
                        </div>
                    </form>
                </div>

                
                <div class="col-md-12 mt-3">
                   <div className="row">
                    {   
                        dataCountries.map((Pais, index) =>
                        <div key={index}
                            onClick={() => {
                                alert(Pais._id);
                              
                              }}
                            className="col-4 ">
                               
                                <div class="card">
                                  <div class="card-body">
                                    <h5 >Id: {Pais.id}</h5>
                                    <h4 >País: {Pais.nombre}</h4>
                                  </div>
                                </div>
                            
                        </div>
                      ) 
                    }
                  </div>
                </div>
                                    

            </div>
        </div>
    );
}

export default Pais;