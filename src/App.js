import WorldMap from './components/WorldMap';
import CNMap from './components/CNMap';
import USMap from './components/USMap';
import './App.css';

function App() {
    return (
        <div className="App">
            <WorldMap />
            <CNMap />
            <USMap />
        </div>
    );
}

export default App;
