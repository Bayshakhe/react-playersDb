import React, { useEffect, useState } from 'react';
import Hired from '../Hired/Hired';
import Player from '../Player/Player';

const Container = () => {
    const [localStorageData, setlocalStorageData] = useState(false)

    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('playersFakeDb.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    useEffect(()=>{

    },[localStorageData])

    const gotHired = (name,price) => {
        let newaddedPlayer = [] ;
        const previousPrice = JSON.parse(localStorage.getItem('price'))
        if(previousPrice){
            const newPrice = JSON.parse(previousPrice) + JSON.parse(price);
            localStorage.setItem('price', newPrice)
        }
        else{
            localStorage.setItem('price', price)
        }

        const addedPlayers = JSON.parse(localStorage.getItem('players'))
        // console.log(addedPlayers)
        if(addedPlayers == null){
            newaddedPlayer.push(name);
            // console.log(newaddedPlayer);
            localStorage.setItem('players', JSON.stringify(newaddedPlayer))
        }
        else{
            // console.log(addedPlayers);
            const newPlayer = [...addedPlayers, name];
            // console.log(newPlayer);
            localStorage.setItem('players', JSON.stringify(newPlayer));
        }
    }
    return (
        <div className='flex gap-3'>
            <div className='grid grid-cols-3 gap-3'>
                {
                    players.map(player => <Player key={player.id} player={player} gotHired={gotHired}></Player>)
                }
            </div>
            <div>
                {/* <Hired playersName={playersName}></Hired> */}
                <Hired></Hired>
            </div>
        </div>
    );
};

export default Container;