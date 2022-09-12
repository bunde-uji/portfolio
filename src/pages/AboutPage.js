import React from 'react';
import html from '../assets/html-1.svg';
import css from '../assets/css-3.svg';
import js from '../assets/logo-javascript.svg';
import react from '../assets/react-2.svg';
import tailwind from '../assets/tailwind-css-2.svg';
import materialize from '../assets/materializecss.svg';
import bootstrap from '../assets/bootstrap-5-1.svg';
import github from '../assets/github.svg';
import img from '../assets/image1.png';


function AboutPage() {
    return (  
        <div className='min-h-[78vh] w-full bg-[#0d0d0d] p-2 text-slate-400'>
            <h2 className='text-xl my-4 ml-4 animate__animated animate__fadeIn'>ABOUT ME</h2>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='w-full md:w-3/5 px-2 md:px-4 tracking-wide py-2  animate__animated animate__slideInLeft'>
                    <h3 className='mb-3 text-xl'>My name is Bunde Uji. I'm a front-end developer from Nigeria, mainly focused on web-based work, for now. I love writing code to bring beautiful and interactive websites to life, in order to give users the best possible experience.</h3>
                    <p className='mb-3 text-xl'>The technologies I use include:</p>
                    <div className='flex flex-wrap'>
                        <img src={html} alt="" className='h-5 mr-3 my-1' />
                        <img src={css} alt="" className='h-5 mr-3 my-1' />
                        <img src={js} alt="" className='h-5 mr-3 my-1' />
                        <img src={react} alt="" className='h-5 mr-3 my-1' />
                        <img src={tailwind} alt="" className='h-5 mr-3 my-1' />
                        <img src={materialize} alt="" className='h-5 mr-3 my-1' />
                        <img src={bootstrap} alt="" className='h-5 mr-3 my-1' />
                        <img src={github} alt="" className='h-5 mr-3 my-1' />
                    </div>
                </div>

                <div className='w-full md:w-2/5 flex justify-center animate__animated animate__slideInRight'>
                    <img src={img} alt="" className='w-44 h-44 sm:h-56 sm:w-56 md:w-80 md:h-80 rounded-lg' />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;