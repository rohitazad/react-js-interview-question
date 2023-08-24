import React from 'react';

import {BrowserRouter, Routes,Route} from 'react-router-dom';
import HeaderComponents from '../Components/Header';
import FooterComponents from '../Components/Footer';
import HomePage from '../Containers/HomePage';
import Question2 from '../Containers/Question_2';
import Question3 from '../Containers/Question_3';
import Question4 from '../Containers/Question_4';
import Question5 from '../Containers/Question_5';
import Question6 from '../Containers/Question_6';
import Question7 from '../Containers/Question_7';
const RouterComponents = ()=>{
    return (
        <>
            <BrowserRouter>
                <HeaderComponents />
                <div className='p-3 max-w-5xl m-auto'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/question2" element={<Question2 />} />
                        <Route path="/question3" element={<Question3 />} />
                        <Route path="/question4" element={<Question4 />} />
                        <Route path="/question5" element={<Question5 />} />
                        <Route path="/question6" element={<Question6 />} />
                        <Route path="/question7" element={<Question7 />} />
                    </Routes>
                </div>
                <FooterComponents />
            </BrowserRouter>
        </>
    )
}

export default RouterComponents;