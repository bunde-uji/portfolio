import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';



function ContactPage() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('bunde_gmail', 'template_w82jd0d', form.current, 'VS3dcsn0ZLlZxz3DS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (  
        <div className='bg-[#0d0d0d] h-[78vh] flex flex-col justify-center items-center px-1'>
            <h3 className='text-slate-300 text-2xl mb-5 text-center animate__animated animate__fadeIn'>Would you like to reach out? Do well to send an email.</h3>

            <form ref={form} onSubmit={sendEmail} className='w-4/5 md:w-2/6 h-2/3 bg-[#2a2a2a] flex flex-col p-4 rounded-md items-center animate__animated animate__fadeIn'>
                <input type="text" name='name' placeholder='Name' className='my-2 bg-[#1f1f1f] rounded-md px-4 py-2 text-sm text-gray-300 outline-none h-10 w-full' />
                <input type="email" name='email' placeholder='Email' className='my-2 bg-[#1f1f1f] rounded-md px-4 py-2 text-sm text-gray-300 outline-none h-10 w-full' />
                <textarea type="text" rows='10' name='message' placeholder='Type your message' className='my-2 bg-[#1f1f1f] rounded-md px-4 py-2 text-sm text-gray-300 outline-none w-full' />
                
                <input type='submit' value='Submit' className='text-slate-200 font-[400] bg-sky-500 hover:bg-sky-400 w-full h-[15%] px-8 pt-1 pb-3 sm:py-2.5 rounded-md text-center mt-3' />
            </form>
        </div>
    );
}

export default ContactPage;