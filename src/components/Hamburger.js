import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from '../App';


function Menu() {
    const {menuActive, setMenuActive} = useContext(AppContext);
    
    function handleClick(){
        fetch('bunde_uji_resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'bunde_uji_resume.pdf';
                alink.click();
            })
        })
    }

    function disableMenu() {
        setMenuActive(false);
    }


    return (  
        <div className='w-full h-full bg-[#0d0d0d] absolute top-0 left-0 z-[1] '>
            <ul className='flex flex-col items-center animate__animated animate__slideInDown'>
                <li className='my-3'><Link className='text-2xl font-base text-slate-400' to='/projects' onClick={disableMenu}>Projects</Link></li>
                <li className='my-3'><label htmlFor="my-modal-4" className='z-[500] text-2xl font-base text-slate-400'>Resume</label></li>
                <li className='my-3' onClick={disableMenu}><Link className='text-2xl font-base text-slate-400' to='/about'>About</Link></li>
                <li className='my-3' onClick={disableMenu}><Link className='text-2xl font-base text-slate-400' to='/contact'>Contact</Link></li>
            </ul>

            <input type="checkbox" id="my-modal-4" className="modal-toggle z-[5000] bg-white" />
            <label for="my-modal-4" class="modal cursor-pointer z-[5000] bg-white">
            <label className="modal-box relative flex flex-col items-center z-[5000]" for="">
                <h3 className="text-lg font-bold">Download resume</h3>
                <button className='bg-slate-700 px-4 py-1 text-white rounded-lg' onClick={handleClick}>Ok</button>
            </label>
            </label>
        </div>
    );
}

export default Menu;