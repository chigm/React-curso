import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Ejemplo01 from './pages/ejemplo01';
import Ejemplo2 from './pages/ejemplo2';

function App() {
  return (
    <div className="App">

      <Header />

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<HomePage/>}
          ></Route>
           <Route path='/ejemplo1' element={<Ejemplo01/>}
          ></Route>
           <Route path='/ejemplo2' element={<Ejemplo2/>}
          ></Route>
        </Routes>
        
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
