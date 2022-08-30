
import './App.css';
import Header from './Header';
import Content from './Content';
import Html from './Html';
import Css from './Css';
import Js from './Js';
import React from './React';
import {Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className='block1'>
        <Header />
        <Content />
        <Routes>
          <Route path='/Html' element={<Html style={{color: 'green'}} />}/>
          <Route path='/Css' element={<Css />} />
          <Route path='/Js' element={<Js />} />
          <Route path='/React' element={<React />} />
        </Routes>
    </div>
  )
}

export default App;
