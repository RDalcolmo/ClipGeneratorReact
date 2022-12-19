import { Fragment } from 'react';
import './App.css';
import NavMenu from './NavMenu/NavMenu';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home/Home';
import Command from './Command/Command';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <NavMenu/>
      <main className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/command" element={<Command/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </Fragment>
  );
}

export default App;
