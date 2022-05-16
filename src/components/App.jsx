import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import LoggedInRoute from '../LoggedInRoute';
// import { AuthProvider } from '../AuthService';
import Top from './Home/Top';
import NewHabit from './Home/NewHabit';
import SignUp from './SignInAndSignUp/SignUp';
import SignIn from './SignInAndSignUp/SignIn';

const App = () => {

    return(
      //  <AuthProvider>
         <Router>
          <Routes>
            <Route path='/' element={<Top />} />
            <Route path='/components/Home/NewHabit' element={<NewHabit />} />
            <Route path='/components/SignInAndSignUp/SignUp' element={<SignUp />} />
            <Route path='/components/SignInAndSignUp/SignIn' element={<SignIn />} />
          </Routes>
         </Router>
      // </AuthProvider> 
    );
};

export default App