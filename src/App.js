import {  Routes,Route,BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Pages/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
