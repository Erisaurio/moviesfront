import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login/login';
import Main from './Components/Main/Main'

export default function Router(){
    return(
       <Routes>
           <Route path='/' element={ <Login />}/>
           <Route path='/Main' element={ <Main />}/>
       </Routes>
    );
}

