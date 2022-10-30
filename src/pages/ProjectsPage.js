import React, {useState, useContext, useRef} from 'react';
import Card from '../components/Card';
import coinfi from '../assets/coinfi.png';
import optimus from '../assets/optimus.png';
import quantum from '../assets/quantum.png';
import {AppContext} from  '../App';


function ProjectsPage() {
    const {menuActive} = useContext(AppContext)
    const pageRef = useRef();

    // console.log(pageRef.current.style.backgroundColor);
    // if (pageRef) console.log(pageRef.current.style.backgroundColor);

    return (  
        <div className='min-h-[80vh] w-full bg-[#0d0d0d] flex flex-col px-10' ref={pageRef}>
            <h3 className='text-slate-300 text-xl font-semibold mt-4'>MY PROJECTS</h3>

            <div className='flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between mt-2 mb-5'>
                <Card img={optimus} repo='https://github.com/bunde-uji/optimus-fitness' url='https://optimusfitness.netlify.app' name='Optimus Fitness' description='E-commerce website with cart and feature to search products.' stack='React, Commerce.js' />

                <Card img={coinfi} repo='https://github.com/bunde-uji/coinfi' url='https://coinfi.netlify.app' name='Coinfi' description='Cryptocurrency website with real-time data on prices of the most popular coins.' stack='React, CoinGecko API' />

                <Card img={quantum} repo='https://github.com/bunde-uji/landing-page-quantum-designs' url='https://quantumdesigns.netlify.app' name='Quantum Designs' description='Landing page for an interior design firm.' stack='HTML, CSS, JavaScript, Materilize CSS' />
            </div>
        </div>
    );
}

export default ProjectsPage;