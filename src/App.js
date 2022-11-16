import React, { useState } from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('random title');

    const handleClick = () => {
        if (text === 'random title') {
            setText('hello world');
        } else {
            setText('random title');
        }
    };

    return (
        <div className="App">
            <h1>{text}</h1>
            <button onClick={handleClick}>change title</button>
        </div>
    );
}

export default App;
