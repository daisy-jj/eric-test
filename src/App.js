import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  {FirstPage}  from './Pages/FirstPage';
import {SecondPage} from './Pages/SecondPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/first" element={<FirstPage/>}/>
      <Route path="/second" element={<SecondPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
