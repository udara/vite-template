// React.
import React from 'react';

// React Router Dom.
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Pages
import Home from '../src/pages/Home.jsx'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/home' exact element={<Home/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
