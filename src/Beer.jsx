import React, { useState } from 'react';

const Beer = ({ name, description, image }) => {
    const [liked, setLike] = useState(false);
    return (
        <>
            <img width={100} src={image}></img>
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={() => setLike((liked) => !liked)} className={`liked${liked.toString()}`}>Like</button>
            <br />
        </>
    );
}

export default Beer;