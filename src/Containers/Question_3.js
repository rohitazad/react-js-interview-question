import React from 'react';

const Question3 = ()=>{
    

    return (
        <>
            <h2 className='text-2xl text-center bg-slate-200 mb-3 py-3'>Question No 3. How to Store Data ?</h2>
            <div className='text-2xl text-left mb-3 py-3'>
                <form>
                    <div className='flex gap-5 justify-center text-2xl items-center'>
                        <label className='w-2/5' htmlFor='name'>Name</label>
                        <input className='form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent' type="text"
                        id='name'
                        name='name'
                        placeholder='enter your name' />
                    </div>
                    <div className='flex gap-5 justify-center text-2xl items-center'>
                        <label className='w-2/5' htmlFor='designation'>Designation</label>
                        <input className='form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent' type="text" 
                        name='designation'
                        id='designation' 
                        placeholder='enter your designation' />
                    </div>
                    <div className='flex gap-5 justify-center text-2xl items-center'>
                        <label className='w-2/5' htmlFor='email'>Email</label>
                        <input className='form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent' type="text" 
                        id='email' 
                        name='email'
                        placeholder='enter your email' />
                    </div>
                    <div className='flex gap-5 justify-center text-2xl items-center'>
                        <label className='w-2/5' htmlFor='address'>Address</label>
                        <input className='form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent' type="text" 
                        id='address' 
                        name='address'
                        placeholder='enter your address' />
                    </div>
                    <div className='flex gap-5 justify-center text-2xl items-center'>
                        <label className='w-2/5' htmlFor='phone'>Phone</label>
                        <input className='form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent' type="text" 
                        id='phone' 
                        name='phone'
                        placeholder='enter your phone' />
                    </div>
                </form>
            </div> 
        </>
    )
}

export default Question3;





















// const [userInfo, setUserInfo] = useState({name:'', designation:'', email:'',address:'',phone:''})
//     console.log('userInfo',userInfo)
//     const handleChange = (e)=>{
//         const name = e.target.name;
//         const value = e.target.value;
//         setUserInfo({
//             ...userInfo,
//             [name]:value
//         })
//     }