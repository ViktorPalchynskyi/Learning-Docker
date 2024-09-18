import './App.css';
import axios from 'axios';

const makeApiRequest = () => {
    axios('/api/testwithcurrentuser').then((response) =>
        console.log(response)
    );
};

const makeMailRequest = () => {
    axios('/mail/api/testconnectionwithapiservice').then((response) =>
        console.log(response)
    );
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello there asdf</h1>
            </header>
            <button onClick={makeApiRequest}>Make api request</button>
            <button onClick={makeMailRequest}>Make mail request</button>
        </div>
    );
}

export default App;
