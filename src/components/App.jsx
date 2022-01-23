import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Top from '../components/pages/Top'
import NewHabit from '../components/pages/NewHabit'

const App = () => {

    return(
        <Router>
           <Routes>
                <Route path='/' element={<Top />} />
                <Route path='/components/pages/NewHabit' element={<NewHabit />} />
           </Routes>
        </Router>
    )

}


export default App