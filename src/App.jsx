/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Who from './components/Who';

function App() {

  const navigate = useNavigate(); // Hook useNavigate para redirección

  return (
    <>
      <Navbar />
      <button className='whoButton' onClick={() => navigate('/who')}><span className='whoSpan'>¿Quiénes somos?</span></button>
      <Routes>
        <Route path="/"/>
        <Route path="/who" element={<Who />} />
        {/* Otras rutas aquí */}
      </Routes>
    </>
  );
}

export default App
