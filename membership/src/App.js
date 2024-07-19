import { useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Layout from './Layout';
import Body from './Component/Body';
import Membership from './Component/Membership';
import Profile from './Component/Profile';
import Auth from './Component/Auth';
import Editprofile from './Component/Editprofile';

function App() {
 
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Body />}/>
      <Route path='/membership/:cat' element={<Membership />} />
      <Route path='/profile' element={<Profile />} /> 
      <Route path='/edit' element={<Editprofile />}/>
      </Route>
      <Route path='/auth' element={<Auth />}/>
  </Routes>
  </BrowserRouter>
  </>

  );
}

export default App;
