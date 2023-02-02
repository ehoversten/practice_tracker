import { Routes, Route, useLocation } from 'react-router-dom';
import Sessions from '../pages/Sessions';
import Gallery from '../pages/Gallery';
import NotFound from '../pages/NotFound';
import RequireAuth from '../components/RequireAuth';
import Home from '../pages/Home';
import About from '../pages/About';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.key}>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={ <Login />}/>

                <Route element={<RequireAuth />} >
                    <Route path='sessions' element={<Sessions />} />
                    <Route path='gallery' element={<Gallery />} />
                </Route>

                <Route path='*' element={<NotFound />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;