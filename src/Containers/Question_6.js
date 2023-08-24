import React, { useEffect, useState } from 'react';




const Question6 = ()=>{
    const [data, setData] = useState(null);
    
    return (
        <>
            <h2 className='text-2xl text-center bg-slate-200 mb-3 py-3'>Question No 6.  Initializing state with object (Call API)</h2>
            <div className='text-2xl text-center mb-3 py-3'>
                Here Data show
                
            </div> 
        </>
    )
}

export default Question6;












// {
//     loading ? 'Loading Data ... ' : <>
//     <h2>{data.title}</h2>
//     <p>{data.body}</p>
//     </>
// }




// const [loading, setLoading] = useState(true);
//     const fetchdata = async ()=>{
//         const data = await fetch('https://dummyjson.com/posts/1');
//         const resData = await data.json();
//         setData(resData);
//         setLoading(false);
//     }
    
//     useEffect(()=>{
//         fetchdata();
//     }, [])