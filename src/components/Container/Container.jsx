import React, { useEffect, useState } from 'react';
import Hired from '../Hired/Hired';
import Player from '../Player/Player';

const Container = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('playersFakeDb.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    const gotHired = (id) => {
        console.log(id)
    }
    return (
        <div className='flex gap-3'>
            <div className='grid grid-cols-3 gap-3'>
                {
                    players.map(player => <Player key={player.id} player={player} gotHired={gotHired}></Player>)
                }
            </div>
            <div>
                <Hired></Hired>
            </div>
        </div>
    );
};

export default Container;