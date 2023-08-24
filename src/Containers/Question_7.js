import React, { useEffect, useState } from 'react';




const Question7 = ()=>{
    const [count, setCount] = useState(0);
   
    return (
        <>
            <h2 className='text-2xl text-center bg-slate-200 mb-3 py-3'>Question No 7.  clearInterval </h2>
            <div className='text-2xl text-center mb-3 py-3'>
                My Count Value is : {count}
            </div> 
        </>
    )
}



// const Question7 = ()=>{
//     const [count, setCount] = useState(1);

//     useEffect(()=>{
//         const i = setInterval(()=>{
//             console.log('My useEffect is working now')
//             setCount(count+1)
//         },1000)
//         return ()=> {clearInterval(i);}
//     }, [count])
    
//     return (
//         <>
//             <h2 className='text-2xl text-center bg-slate-200 mb-3 py-3'>Question No 7.  clearInterval</h2>
//             <div className='text-2xl text-center mb-3 py-3'>
//                 My Count Value is : {count}
//             </div> 
//         </>
//     )
// }

export default Question7;












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