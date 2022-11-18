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
    const [hidePeople, setHidePeople] = useState('false');

    const handlePeople = () => {
        if (people.length !== 0) {
            setPeople([]);
        } else {
            setPeople(Birthdays);
        }
        setHidePeople(!hidePeople);
    };

    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value >= 1) {
            document.title = `Current clicks ${value}`;
            console.log(document.title);
        }
        //Empty Array for only initial, parameter for every time parameter is rendered
    }, [value]);

    const [widthSize, setWidthSize] = useState(window.innerWidth);
    const [heightSize, setHeightSize] = useState(window.innerHeight);

    const checkSize = () => {
        setWidthSize(window.innerWidth);
        setHeightSize(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        //Invoked once we exit this useEffect
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    });

    const url = 'https://api.github.com/users';
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        //Limiting how many users are shown so page looks nicer
        setUsers(users.filter((user) => user.id === 1));
        // console.log(users);
    };

    useEffect(() => {
        getUsers();
        //Careful of the infinite loop,
        //Add dependency array
    }, []);

    const [firstName, setFirstName] = useState('');
    const [nameList, setNameList] = useState([]);

    const handleSumbit = (e) => {
        e.preventDefault();
        if (firstName) {
            const person = { firstName };
            //Current value in the state
            setNameList((names) => {
                //Spread operator to get the current value in the list and add another
                return [...names, person];
            });
            setFirstName('');
        }
    };

    return (
        <>
            <div className="App">
                <h1>{text}</h1>
                <button onClick={handleClick}>change title</button>

                <div>
                    {/* {hidePeople ? setPeople([]) : setPeople[Birthdays]} */}
                    <h1>{people.length} birthdays today</h1>
                    <List people={people} />
                    <button onClick={() => handlePeople()}>
                        {hidePeople ? 'Hide People' : 'Show People'}
                    </button>
                </div>

                <button onClick={() => setValue(value + 1)}>
                    Increment title
                </button>

                <div>
                    <h1>Window width size: {widthSize} px</h1>
                    <h1>Window height size: {heightSize} px</h1>
                </div>

                <div>
                    <h3>github users</h3>
                    {users.map((user) => {
                        //User is an object
                        const { id, login, avatar_url, html_url } = user;
                        return (
                            <li key={id}>
                                <div>{login}</div>
                            </li>
                        );
                    })}
                </div>

                <article>
                    {/* onSubmit is the same as onClick */}
                    <form className="form" onSubmit={handleSumbit}>
                        <div className="form-control">
                            <label htmlFor="firstName">Name: </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <button type="submit">Add</button>
                    </form>
                    {nameList.map((name) => {
                        const { id, firstName } = name;
                        return <div>{<h3>{firstName}</h3>}</div>;
                    })}
                </article>
            </div>
        </>
    );
}

export default App;
