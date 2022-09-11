import React from 'react';
import {Link} from 'react-router-dom';



function Card(props) {
    return ( 
        <div class="card card-compact w-[100%] sm:w-80 md:w-[20rem] bg-base-100 shadow-2xl rounded-md my-4  md:mx-2 animate__animated animate__flipInY">
        <figure><img src={props.img} alt="Shoes" className='opacity-70' /></figure>
        <div class="card-body bg-[#2a2a2a]">
            <h2 class="card-title text-slate-200">{props.name}</h2>
            <p className='text-slate-300'>{props.description}</p>
            <p className='text-slate-200 font-semibold'>{props.stack}</p>
            <div class="card-actions justify-end">
                <a href={props.repo} className='mr-1' target='_blank'><i className='fa-brands fa-github
                text-2xl text-slate-200 hover:text-sky-500'></i></a>
                <a href={props.url} className="ml-2 hover:text-sky-500 text-lg rounded-xl text-slate-200" target='_blank'><i className='fa-solid fa-eye mr-1'></i>Live</a>
            </div>
        </div>
        </div>
    );
}

export default Card;