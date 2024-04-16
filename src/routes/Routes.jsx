import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from '../pages/Homepage'

function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
            </Routes>
        </Router>
    )
}

export default RoutesApp;
