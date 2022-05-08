import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'; 

function CategoriesMenu(props) {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   
    return (
      <>
        <div className={'z-50 bg-pistachio text-black  w-80 h-36 absolute mt-2 left-40 '}>
          <div className={'flex flex-row justify-between'}>
            {/* <ul className={'p-2 mx-2'}>
              <li className={props.activeCategory == 'categoryOne' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('categoryOne')}>Category 1</button></li>
              <li className={props.activeCategory == 'categoryTwo' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('categoryTwo')}>Category 2</button></li>
              <li className={props.activeCategory == 'categoryThree' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('categoryThree')}>Category 3</button></li>
              <li className={props.activeCategory == 'categoryFour' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('categoryFour')}>Category 4</button></li>
              <li className={props.activeCategory == 'categoryFive' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('categoryFive')}>Category 5</button></li>
            </ul> */}
            <ul className={'p-2 mx-2'}>
              <li className={'logo2 text-md'}>Food</li>
              <li className={'logo2 text-md'}>Deserts</li>
              <li className={'logo2 text-md'}>Party Rentals</li>
              <li className={'logo2 text-md'}>Amazon's links</li>
            </ul>
          </div>  
        </div>
      </>
  
  )
}

export default CategoriesMenu