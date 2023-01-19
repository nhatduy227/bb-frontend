import './App.css'
import Login from './Pages/Login/Login';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Route, Routes } from "react-router-dom";

function App() {
  /*
    * TODO:
    * Add routes for Create and View components
  */
  return (
    <div className='background'>
      <Routes>
        <Route path="/" element={<Login />} />       
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;