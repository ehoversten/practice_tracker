import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const RequireAuth = () => {
    const { user } = useAuthContext();
    const location = useLocation();

    console.log(`AUTH: ${user}`)
    return (
        user
            ? <Outlet />
            : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth;