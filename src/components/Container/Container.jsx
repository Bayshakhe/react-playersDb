import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Container = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('playersFakeDb.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className='flex gap-3'>
            <div className='grid grid-cols-3 gap-3'>
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
            <div className='p-5 bg-yellow-400'>
                <h2>Selected</h2>
            </div>
        </div>
    );
};

export default Container;