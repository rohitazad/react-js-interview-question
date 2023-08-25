import React, { useEffect, useState } from 'react';




const Question5 = ()=>{
    console.log('My components Rendring...')
    const [data, setData] = useState({name:'Rohit',age:35})
    
    const handleClick = ()=>{
        setData({
            ...data,
            age:35
        })
    }
 
    return (
        <>
            <h2 className='text-2xl text-center bg-slate-200 mb-3 py-3'>Question No 5.  Primitives vs non-primitives</h2>
            <div className='text-2xl text-center mb-3 py-3'>
                <button 
                    type='button'
                    onClick={handleClick}
                    className='bg-blue-700 rounded-md py-1 px-2 text-white'>
                    Add to Card
                </button>
            </div> 
        </>
    )
}

export default Question5;
















// useEffect(()=>{

// }, [data.age])

// {name:'Rohit', age:32}