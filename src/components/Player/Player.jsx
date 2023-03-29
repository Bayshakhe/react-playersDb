import React from 'react';

const Player = (props) => {
    const {id, image, name, price} = props.player;
    const gotHired = props.gotHired
    return (
        <div className="card card-compact h-96 w-full bg-base-100 shadow-xl p-3">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <button onClick={()=>gotHired(id)} className="btn-sm btn-primary">HIRE</button>
                </div>
            </div>
        </div>
    );
};

export default Player;