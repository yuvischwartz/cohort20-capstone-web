import React from 'react'

function DropDown(props) {
  return (
    <div className={'w-screen h-screen bg-blue-600 flex justify-left text-white'}>
    <ul className={'text-xl '}>
              <li onClick={props.handleClick}className={'cursor-pointer p-5 pl-10 logo2'}>ABOUT US</li>  
              <li onClick={props.handleClick} className={'cursor-pointer p-5 pl-10 logo2'}>CONTACT US</li> 
              <li onClick={props.handleClick} className={'cursor-pointer p-5 pl-10 logo2'}>SECURITY</li>  
              <li onClick={props.handleClick} className={'cursor-pointer p-5 pl-10 logo2'}>LOG IN</li>         
    </ul>
    </div>
  )
}

export default DropDown
