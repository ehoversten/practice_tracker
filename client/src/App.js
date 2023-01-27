import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import SessionList from './pages/SessionList';
import Sessions from './pages/Sessions';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import RequireAuth from './components/RequireAuth';
import Footer from './components/Footer/Footer';


function App() {
  // const user = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={ <Login />}/>

          <Route element={<RequireAuth />} >
            <Route path='sessions' element={<Sessions />} />
            <Route path='gallery' element={<Gallery />} />
            {/* <Route path='/' element={user ? <Home /> : <Navigate to='/login'/>} /> */}
          </Route>


          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
