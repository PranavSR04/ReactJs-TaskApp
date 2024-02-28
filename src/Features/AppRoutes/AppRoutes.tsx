import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from '../../App';
import AuthContext from '../../Components/AuthContext/AuthContext';
import LoginHandler from '../Login/LoginHandler';


const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <AuthContext>
      <Routes>
      <Route path='/' element={<LoginHandler/>}/>
      <Route path='/todo' element={<App/>}/>
      {/* <Route path='/*' element={<NotFound/>}/> */}
      </Routes>
      </AuthContext>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
