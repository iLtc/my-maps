import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import WorldMap from './components/WorldMap';
import CNMap from './components/CNMap';
import USMap from './components/USMap';


function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Container>
                <Routes>
                    <Route path="/:lang?" element={<WorldMap />} />
                    <Route path="/:lang?/cn" element={<CNMap />} />
                    <Route path="/:lang?/us" element={<USMap />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
