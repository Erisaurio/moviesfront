import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login/login';

import Main from './Components/Main/Main';
import Register from './Components/Register/Register';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import Movie from './Components/Movie/Movie';
import NewMovie from './Components/NewMovie/NewMovie';
import Peli from './Components/Peli/Peli';
import EditMovie from './Components/EditMovie/EditMovie';
import Error from './Components/Error/Error';
import Plataforma from './Components/Plataforma/plataforma'
import Errror from './Components/ourSpill/ourSpill';
import Dashboard from './Components/Dashboard/Dashboard';
import Movies from './Components/Movies/Movies';

/// <Route path='/ModificarPelicula' />

export default function Router(){
    return(
       <Routes>
           <Route path='/Login' element={ <Login />}/>
           <Route path='/Plataforma' element={ <Plataforma />}/>
           <Route path='/Main' element={ <Main />}/>
           <Route path='/Landing' element={ <Landing />}/>
           <Route path='/' element={ <Landing />}/>
           <Route path='/Register' element={ <Register  />}/>
           <Route path='/Home' element={<Home/>}/>
           <Route path='/User' element={ <User />}/>
           <Route path='/Dashboard' element={ <Dashboard />}/>
           <Route path='/NewMovie' element={ <NewMovie />}/>    
           <Route path='/Peli' element={ <Peli />}/>    
           <Route path='/Movies' element={ <Movies />}/>
           <Route path='/DetallePelicula/:Name' element={ <Movie />}/>
           <Route path='/EditPelicula/:Name' element={ <EditMovie />}/>
           <Route path='*' element={ <Error />}/>
           <Route path='/OurSpill' element={ <Errror />}/>  
       </Routes>
    );
}

