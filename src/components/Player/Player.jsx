import React from 'react';

const Player = (props) => {
    const {image, name, price} = props.player;
    return (
        <div>
            <div className="card card-compact h-96 w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-left'>Price: ${price}</p>
                <div className="card-actions">
                <button className="btn-sm btn-primary">HIRE</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Player;