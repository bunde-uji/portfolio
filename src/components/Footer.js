import React from 'react';
import {NavLink} from 'react-router-dom';


function Footer() {
    return (  
        <div className='h-[10vh] bg-[#0d0d0d] border-t border-t-slate-500 flex justify-center items-center z-50 cursor-pointer'>
            <a href="https://www.github.com/bunde-uji" target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-2xl text-slate-200 mx-2 hover:text-sky-500"></i></a>

            <a href="https://www.linkedin.com/in/bunde-uji-7a3834173/" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin text-2xl text-slate-200 mx-2 hover:text-sky-500"></i></a>

            <a href="https://twitter.com/pseudobadguy" target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter text-2xl text-slate-200 mx-2 hover:text-sky-500"></i></a>
        </div>
    );
}

export default Footer;