import React from 'react'

function Navbar(props) {
  return (
    <div>
      <ul className={'p-4 bg-blue-600 text-white flex flex-row sm:justify-start justify-between relative'}>
          <li className={'logo2 text-center text-xl uppercase tracking-wide pl-5 font-semibold cursor-pointer'}>Question App</li>
          <li className={'hidden sm:inline-block font text-sm ml-20 pt-1 cursor-pointer uppercase'}>About Us</li>
          <li className={'hidden sm:inline-block font text-sm ml-10 pt-1 cursor-pointer uppercase'}>Contact Us</li>
          <li className={'hidden sm:inline-block font text-sm ml-10 pt-1 cursor-pointer uppercase'}>Security</li>
          <li onClick={props.handleClick} className={'sm:hidden text-xl cursor-pointer'}><i  className={props.click ? 'fa-solid fa-xmark text-white' : 'fa-solid fa-bars text-white'}></i></li>
        <li onClick={props.categoriesClick} className={'absolute right-8 '}><button onClick={props.categoriesClick}><i onClick={props.categoriesClick} className={' px-2 float-right hidden sm:inline-block fa-solid fa-caret-down text-white text-2xl'}/></button></li>
      </ul>
      
    </div>
  )
}

export default Navbar
