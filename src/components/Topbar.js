import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'; 
import DropdownMenu from './DropdownMenu';
import CategoriesMenu from './CategoriesMenu';
import Home from '../pages/Home';

function Topbar(props) {
  const [click, setClick] = useState(false);
  const [categoriesMenu, setCategoriesMenu] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setCategoriesMenu(!categoriesMenu);
    console.log('clicked')
  }

  return (
      <>
    <div className={'grid grid-cols-12 w-screen h-12 sm:h-10 '}>
        
        <div className={'col-span-9 bg-peach'}>
                
          <ul className={'flex flex-row text-md text-black pt-2 justify-between sm:mx-20 mx-3 '}>
                      <li className={'logo2 text-left text-sm text-white sm:hidden pt-1'}>Hello, UserName welcome back!</li>
                      <li className={'hidden sm:inline-block logo2 cursor-pointer hover:border-b hover:border-black'}><Link to="/"className={'logo2'}>Home</Link></li>
                      <li onClick={handleClick}
                        className={'hidden sm:inline-block logo2 cursor-pointer '}>
                      Categories <i className={'fas fa-caret-down text-md pl-1'} />
              {categoriesMenu && <CategoriesMenu handleClick={handleClick}
                activeCategory={props.activeCategory} setActiveCategory={props.setActiveCategory} allCategories={props.allCategories} 
              />}
                      </li>
                      <li className={'hidden sm:inline-block logo2 cursor-pointer hover:border-b hover:border-black'}><Link to="/to-do's" className={'logo2'}>Birthday Check List</Link></li>
                      <li className={'hidden sm:inline-block logo2 cursor-pointer hover:border-b hover:border-black'}><Link to="/about" className={'logo2'}>About</Link></li>
                      <li className={'hidden sm:inline-block logo2 cursor-pointer hover:border-b hover:border-black'}><Link to="/contact"className={'logo2'}>Contact Us</Link></li>
                  </ul>
                
            </div>    
              <div className={'col-span-3 bg-white text-sm'}>
                <div className={'flex justify-center pt-2 text-black'}>
                      <p className={'hidden sm:inline-block logo2 pr-4 pt-1'}>Hello, UserName!</p>
                      <button className={'hidden sm:inline-block px-5 py-1 bg-pistachio logo2 text-black text-sm hover-bg-coffe'}>Log Out</button>
                </div>
                <div onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark sm:hidden flex justify-center cursor-pointer text-coffe text-xl pt-1 hover-coffe' : 'fa-solid fa-bars sm:hidden cursor-pointer text-coffe flex justify-center text-xl pt-1 hover-coffe'}></i>
                </div>
          </div>
          
    </div>
      {click && <DropdownMenu handleClick={handleClick} />}
      
     
      </>
  )
}

export default Topbar