import { Navigate } from "react-router-dom";

interface PrivateRoutePropsI {
    children: any;
}

const PrivateRoute = ({children}:PrivateRoutePropsI) => {
    const auth = true; // TODO: replace true constant for auth validation
    return auth ? children : <Navigate to="/" />;
}
export default PrivateRoute;