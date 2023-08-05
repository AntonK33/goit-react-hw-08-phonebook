import { Route } from "react-router-dom";
//import { RedirectFunction } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";


// export default function PrivateRoute({children, ...routeProps}){
// const isLoggedIn = useSelector(useAuth.isLoggedIn );
//     return (<Route {...routeProps}>
//         {children}
//         </Route>);
// }
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
  
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };