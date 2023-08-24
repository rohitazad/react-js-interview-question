import React from 'react'
import { Link } from 'react-router-dom';

const HeaderComponents = ()=>{
    return (
        <>
            <div className='bg-blue-700'>
                <div className='p-3 max-w-5xl m-auto'>
                    <ul className='flex gap-4 text-2xl'>
                        <li className='bg-white rounded-full py-1 px-4'>
                            <Link to='/'>01</Link>
                        </li>
                        <li className='bg-white rounded-full py-1 px-4'>
                            <Link to='/question2'>02</Link>
                        </li>
                        <li className='bg-white rounded-full py-1 px-4'>
                            <Link to='/question3'>03</Link>
                        </li>
                        <li className='bg-white rounded-full py-1 px-4'>
                            <Link to='/question4'>04</Link>
                        </li>
                        <li className='bg-white rounded-full py-1 px-4'>
                            <Link to='/question5'>05</Link>
                        </li>
                        <li className='bg-white rounded-full py-1 px-4'>
                            <Link to='/question6'>06</Link>
                        </li>
                        <li className='bg-white rounded-full py-1 px-4'>
                            <Link to='/question7'>07</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderComponents;