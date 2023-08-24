import React, {useState} from 'react';

const HomePage = ()=>{
    const [count, setCount] = useState(0);

    const handlerCountChange = ()=>{
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
    }

    return (
        <>
            <h2 className='text-2xl text-center bg-slate-200 mb-3 py-3'>Question No 1. State update correct ?</h2>
            <div>
                <button onClick={handlerCountChange} className='bg-blue-700 text-white p-2 text-2xl' type="button">Click to me </button>
            </div>
            <p className='text-3xl'>My Count is :- {count}</p>
        </>
    )
}

export default HomePage;