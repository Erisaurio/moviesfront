import { Routes, Route} from 'react-router-dom';
import Login from './Components/Login/login';
import Main from './Components/Main/Main';
import Register from './Components/Register/Register';

export default function Router(){
    return(
       <Routes>
           <Route path='/' element={ <Login />}/>
           <Route path='/Main' element={ <Main />}/>
           <Route path='/Register' element={ <Register />}/>
           <Route path='/User' />
           <Route path='/Admin' />
       </Routes>
    );
}

