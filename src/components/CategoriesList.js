import React from 'react'

function CategoriesList(props) {
  return (
    <div>
      <ul className={'bg-blue-500 text-white sm:p-2 p-2 flex flex-col justify-center text-center  sm:flex-row sm:justify-end'}>
            <li className={props.selectedCategory == 'categoryOne' ? 'pt-2  px-4 text-black ' : 'pt-2 px-4 text-white'} onClick={() => props.setSelectedCategory('categoryOne')}>
                        <button className={'text-md uppercase font-ligth'}>Category 1</button></li>
            <li className={props.selectedCategory == 'categoryTwo' ? 'pt-2 px-4 text-black' : 'pt-2 px-4 text-white'} onClick={() => props.setSelectedCategory('categoryTwo')}>
                        <button className={'text-md uppercase font-ligth'}>Category 2</button></li>
            <li className={props.selectedCategory == 'categoryThree' ? 'pt-2 px-4 text-black' : 'pt-2 px-4 text-white'} onClick={() => props.setSelectedCategory('categoryThree')}>
                        <button className={'text-md uppercase font-ligth'}>Category 3</button></li>
            <li className={props.selectedCategory == 'categoryFour' ? 'pt-2 px-4 text-black' : 'pt-2 px-4  text-white'} onClick={() => props.setSelectedCategory('categoryFour')}>
                        <button className={'text-md uppercase font-ligth'}>Category 4</button></li>
            <li className={props.selectedCategory == 'categoryFive' ? 'pt-2 px-4 text-black' : 'pt-2 px-4  text-white'} onClick={() => props.setSelectedCategory('categoryFive')}>
                        <button className={'text-md uppercase font-ligth'}>Category 5</button></li>
        </ul>
    </div>
  )
}

export default CategoriesList
