import './App.css';
import NavMenu from './NavMenu/NavMenu';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home/Home';
import Command from './Command/Command';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './Error';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavMenu/>}>
            <Route index element={<Home/>}/>
            <Route path="/command" element={<Command/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
