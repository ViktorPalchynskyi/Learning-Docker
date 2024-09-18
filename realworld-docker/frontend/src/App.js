import './App.css';
import axios from 'axios';

const makeApiRequest = () => {
    axios('/api/testwithcurrentuser').then((response) =>
        console.log(response)
    );
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello there</h1>
                <p>We are in dev mode</p>
            </header>
            <button onClick={makeApiRequest}>Make api request</button>
        </div>
    );
}

export default App;
