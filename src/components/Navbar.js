import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
// import resume from '../assets/bunde_uji_resume.pdf';
import Hamburger from './Hamburger';
import { AppContext } from '../App';



function Navbar() {
    const {menuActive, setMenuActive} = useContext(AppContext);

    function handleClick(){
        fetch('resume_bunde_uji.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume_bunde_uji.pdf';
                alink.click();
            })
        })
    }

    function toggleMenu() {
        setMenuActive(!menuActive);
    }

    
    return (  
        <div className='bg-[#0d0d0d] h-[12vh] flex items-center px-4 justify-between border-b border-b-slate-500 z-50 relative'>
            <NavLink to='/'><h1 className='text-2xl font-bold text-sky-500 cursor-pointer' onClick={()=>setMenuActive(false)}>Bunde.</h1></NavLink>
          
            <ul className='hidden sm:flex items-center'>
                <li><NavLink to='/projects' className={`font-bold mx-2 hover:text-sky-300 hover:border-b-2 hover:border-b-sky-300 transition duration-300 text-slate-300`} style={({ isActive }) => ({ color: isActive ? '#7dd3fc' : '', borderBottom: isActive ? '2px solid #7dd3fc' : '' })}>Projects</NavLink></li>

                <li><label htmlFor='my-modal-4' className={`{({ isActive }) => "nav-link" + (isActive ? " activated" : "")}, text-slate-300 text-base font-bold mx-2 hover:text-sky-300 hover:border-b-2 hover:border-b-sky-300 transition duration-300 modal-button cursor-pointer ${({ isActive }) => ( isActive ? 'navlink-active' : '' )}`}>Resume</label></li>

                <li><NavLink to='/about' className='text-slate-300 text-base font-bold mx-2 hover:text-sky-300 hover:border-b-2 hover:border-b-sky-300 transition duration-300' style={({ isActive }) => ({ color: isActive ? '#7dd3fc' : '', borderBottom: isActive ? '2px solid #7dd3fc' : '' })}>About</NavLink></li>


                <li><NavLink to='/contact' className={`{({ isActive }) => "nav-link" + (isActive ? " activated" : "")}, text-slate-300 text-base font-bold mx-2 hover:text-sky-300 hover:border-b-2 hover:border-b-sky-300 transition duration-300 modal-button cursor-pointer ${({ isActive }) => ( isActive ? 'navlink-active' : '' )}`} style={({ isActive }) => ({ color: isActive ? '#7dd3fc' : '', borderBottom: isActive ? '2px solid #7dd3fc' : '' })}>Contact</NavLink></li>
            </ul>

            <button className='sm:hidden' onClick={toggleMenu}><i className={`fa-solid fa-${menuActive ? 'times' : 'bars'} text-slate-500 text-xl`}></i></button>


            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
            <label className="modal-box relative flex flex-col items-center" for="">
                <h3 className="text-lg font-bold">Download resume</h3>
                <button className='bg-slate-700 px-4 py-1 text-white rounded-lg' onClick={handleClick}>Ok</button>
            </label>
            </label>

        </div>
    );
}

export default Navbar;