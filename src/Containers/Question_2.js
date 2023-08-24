import React from 'react';

const Question2 = ({blogId})=>{
    

    if(!blogId){
        return (
            <>
               <h2 className='text-2xl text-center bg-slate-200 mb-3 py-3'>Question No 2. Conditionaly Render ?</h2>
               <div className='text-2xl text-center mb-3 py-3'>Please provide blog id</div> 
            </>
        )
    }

    return (
        <>
            <h2 className='text-2xl text-center bg-slate-200 mb-3 py-3'>Question No 2. Conditionaly Render ?</h2>
            <div className='text-2xl text-center mb-3 py-3'>
                Here you blog id Data fetch and genrate your ui
            </div> 
        </>
    )
}

export default Question2;




















// const [data, setData] = useState('MyBlogData');

//     useEffect(()=>{
//         setData('yes set new data ')
//     },[data])