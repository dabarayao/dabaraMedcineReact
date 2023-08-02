import Home from './components/views/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from 'react-router-dom';
import Contenu from'./components/views/Content';
import Next from'./components/views/Next';

function App() {
  return (
   
    <div className="App">
     <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contenu" element={<Contenu />} />
              <Route path="/suivant/:id" element={<Next />} />
     </Routes>
     </div>
    
  );
}

export default App;
