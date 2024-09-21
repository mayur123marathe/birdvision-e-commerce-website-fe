import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NavBar = () =>{
    return(
    <nav class=" bg-white font-serif h-[100px] flex justify-between w-[98vw] items-center  rounded-md mr-1 ml-1 border-[0.5px] border-yellow-100 z-10">
        <a href='https://www.birdvision.in/'>
        <img src="https://www.birdvision.in/web-control/assets/img/BVC-logo-180.svg" class="h-14 px-10 rounded-2xl "></img>
        </a>
    </nav>

    );
};

export default NavBar;


