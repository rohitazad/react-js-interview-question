import React, { useState } from 'react';


const PER_CARD_PRICE = 20;

const Question4 = ()=>{
    const [quatity, setQuatity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0)
    
 
    return (
        <>
            <h2 className='text-2xl text-center bg-slate-200 mb-3 py-3'>Question No 4.</h2>
            <div className='text-2xl text-center mb-3 py-3'>
                <button 
                    className='bg-blue-700 rounded-md py-1 px-2 text-white'>
                    Add to Card
                </button>
                <p>My Total Card Value is :- {totalPrice}</p>
            </div> 
        </>
    )
}

export default Question4;





















// const totalPrice = quatity * PER_CARD_PRICE

// const handleClick = ()=>{
//     setQuatity(quatity+1)
// }


//const [totalPrice, setTotalPrice] = useState(0)
   // useEffect(()=>{
    //     setTotalPrice(quatity * PER_CARD_PRICE) 
    // },[quatity])