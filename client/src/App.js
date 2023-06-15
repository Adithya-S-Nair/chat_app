import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//CSS
import 'mdb-ui-kit/css/mdb.min.css';
import './App.css';

//Pages & Components
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Register from './Pages/Register';
import Signout from './Pages/Signout';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signout' element={<Signout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App