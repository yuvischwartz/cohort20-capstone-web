import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'; 

function LogoBar() {
    return (
    <>
    <div className={'w-screen h-36 relative flex justify-center '}>
                <div> <img  
                className = {'h-20 my-8 cursor-pointer'}  
                alt='img'
                src={`images/logo.png`}
                />
                    </div> 
            </div>
        </>
  )
}

export default LogoBar