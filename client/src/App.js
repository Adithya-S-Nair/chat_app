import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as mdb from 'mdb-ui-kit';
import { Input } from 'mdb-ui-kit';

//CSS
import 'mdb-ui-kit/css/mdb.min.css';
import './App.css';

//Pages & Components
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App