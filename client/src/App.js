import { BrowserRouter, Routes, Route} from 'react-router-dom' ;
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
