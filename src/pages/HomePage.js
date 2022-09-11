import React, {useContext} from 'react';
import bgVideo from '../assets/video1.mp4';
import ExploreBtn from '../components/ExploreBtn';
import {Link} from'react-router-dom';
import Menu from '../components/Hamburger';
import { AppContext } from '../App';



function HomePage() {
    const {menuActive} = useContext(AppContext);

    return (  
        <div className='h-[100vh] md:h-[110vh] w-full relative'>
            <video src={bgVideo} autoPlay muted className='object-cover h-full w-full absolute opacity-95'></video>
            <div className='w-full h-full flex flex-col justify-center items-center absolute transform translate-y-[-10%] animate__animated animate__fadeIn'>
                <h2 className='text-white text-3xl text font-bold mb-2 drop-shadow-xl'>Hi there,</h2>
                <h1 className='text-white text-4xl text font-bold mb-2'>I'm <span className='text-sky-500'>Bunde Uji</span></h1>
                <h2 className='text-white text-3xl text font-bold mb-2 cursor-pointer text-center'>Front-End Developer</h2>
                <ExploreBtn />

            </div>

            {/* {menuActive && <Menu />} */}
        </div>
    );
}

export default HomePage;