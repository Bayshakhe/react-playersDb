const Hired = () => {
    const names = JSON.parse(localStorage.getItem('players'))
    const totalPrice = JSON.parse(localStorage.getItem('price'))
    console.log(names, totalPrice)
    return (
        <div className='w-40 px-3 py-5 bg-yellow-400 sticky top-0'>
            <p className='font-bold text-xl'>Hired</p>
            {
                names?.map(name => <p>{name}</p>)
            }
            <p className="font-bold">Total Budget: ${totalPrice}</p>
        </div>
    );
};

export default Hired;