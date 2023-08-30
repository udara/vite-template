// React.
import React from 'react';

// React Router Dom.
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Pages
import Home from './pages/home.jsx';
function App() {
    return (
        <>
                <Router>
                    <Routes>
                        <Route path='/' exact element={<Home/>}/>
                    </Routes>
                </Router>
        </>
    )
}

export default App
