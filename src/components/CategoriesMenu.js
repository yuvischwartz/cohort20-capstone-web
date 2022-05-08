import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'; 

function CategoriesMenu(props) {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   
    return (
      <>
        <div className={'z-50 bg-pistachio text-black  w-80 h-36 absolute mt-2 left-40 '}>
          <div className={'flex flex-row justify-center pt-2'}>
          <ul>
            {props.allCategories && props.allCategories.map((category, idx) => {
              return <li className={props.activeCategory == category.name ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'} key={idx} onClick={() => props.setActiveCategory(category.name)}>{category.name}</li>
            })}
          </ul>
            {/* <ul className={'p-2 mx-2'}>
              <li className={props.activeCategory == 'Decorations' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('Decorations')}>Decorations</button></li>
              <li className={props.activeCategory == 'Cake' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('Cake')}>Cake</button></li>
              <li className={props.activeCategory == 'Food' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('Food')}>Food</button></li>
              <li className={props.activeCategory == 'Party Rentals' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('Party Rentals')}>Party Rentals</button></li>
              <li className={props.activeCategory == 'Photography' ? 'logo2 text-md cursor-pointer border-b border-black' : 'logo2 text-md cursor-pointer hover:border-b hover:border-black'}><button onClick={() => props.setActiveCategory('Photography')}>Photography</button></li>
            </ul> */}
            {/* <ul className={'p-2 mx-2'}>
              <li className={'logo2 text-md'}>Food</li>
              <li className={'logo2 text-md'}>Deserts</li>
              <li className={'logo2 text-md'}>Party Rentals</li>
              <li className={'logo2 text-md'}>Amazon's links</li>
            </ul> */}
          </div>  
        </div>
      </>
  
  )
}

export default CategoriesMenu