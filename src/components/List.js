import React from 'react';

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age } = person;
                return (
                    <article key={id} className="person">
                        <div>
                            <h1>{name}</h1>
                            <h1>{age}</h1>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;
