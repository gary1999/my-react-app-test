import React, { useState } from 'react';
import './App.css';

import birthdays from './data/Birthdays';
import List from './components/List';

function App() {
    const [text, setText] = useState('random title');

    const handleClick = () => {
        if (text === 'random title') {
            setText('hello world');
        } else {
            setText('random title');
        }
    };

    const [people, setPeople] = useState(birthdays);

    const handlePeople = () => {
        if (people.length != 0) {
            setPeople([]);
        } else {
            setPeople(birthdays);
        }
    };

    return (
        <>
            <div className="App">
                <h1>{text}</h1>
                <button onClick={handleClick}>change title</button>

                <div>
                    <h1>{people.length} birthdays today</h1>
                    <List people={people} />
                    <button onClick={handlePeople}>Click</button>
                </div>
            </div>
        </>
    );
}

export default App;
