import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login/login';
import Main from './Components/Main/Main'
import Plataforma from './Components/Plataforma/plataforma'

export default function Router(){
    return(
       <Routes>
           <Route path='/' element={ <Login />}/>
           <Route path='/Plataforma' element={ <Plataforma />}/>
           <Route path='/Main' element={ <Main />}/>
       </Routes>
    );
}

