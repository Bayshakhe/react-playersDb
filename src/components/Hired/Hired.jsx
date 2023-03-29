import React from 'react';

const Hired = (props) => {
    return (
        <div className='px-10 py-5 bg-yellow-400'>
            <p className='font-bold text-xl'>Hired</p>
            <p>{props.id}</p>
        </div>
    );
};

export default Hired;