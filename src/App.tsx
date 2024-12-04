import './App.css';
import NavMenu from './NavMenu/NavMenu';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Command from './Command/Command';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavMenu />}>
          <Route index element={<Home />} />
          <Route path="/command" element={<Command />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <footer className="footer">
        <div className="footer-text">
          <center><b>Twitch Clip Command Generator</b> &copy; {new Date().getFullYear()} - Created by SkyeRaf</center>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
