import React, { useState, useEffect } from 'react';
import './App.css';

import Birthdays from './data/Birthdays';
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

    const [people, setPeople] = useState(Birthdays);

    const handlePeople = () => {
        if (people.length !== 0) {
            setPeople([]);
        } else {
            setPeople(Birthdays);
        }
    };

    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value >= 1) {
            document.title = `Current clicks ${value}`;
            console.log(document.title);
        }
        //Empty Array for only initial, parameter for every time parameter is rendered
    }, [value]);

    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        //Invoked once we exit this useEffect
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    });

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

                <button onClick={() => setValue(value + 1)}>
                    Increment title
                </button>

                <div>
                    <h1>Window size: {size} px</h1>
                </div>
            </div>
        </>
    );
}

export default App;
