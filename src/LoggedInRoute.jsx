// import React, { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { AuthContext } from './AuthService';

// const LoggedInRoute = ({ component: Component, ...rest }) => {
//     const user = useContext(AuthContext);

//     return(
//         <Route
//             {...rest}
//             component={props =>
//             user ? <Component {...props}/>:<Navigate to={'/components/SignInAndSignUp/SignIn'} />
//             } 
//         />    
//     );
// };

// export default LoggedInRoute;