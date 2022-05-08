// import Topbar from '../components/Topbar';
// import React from 'react'
// import {useEffect, useState} from "react";



// function Categories() {

// const [allCategories, setAllCategories] = useState();
// const [activeCategory, setActiveCategory] = useState();
// const [questionFormText, setQuestionFormText] = useState('');

    
// const fetchCategories = async () => {
//     let categories = await fetch('http://localhost:3000/api/categories')
//     categories = await categories.json()
//     setAllCategories(categories)
//     console.log(categories);
//     console.log(allCategories);
//     console.log('fetchingcategories');
// };
// useEffect(() => {
//     console.log('this code will run only once when the page loads up!')
//     fetchCategories()
// }, [])
    
//     return (
//       <>
//       <div className={'h-fit w-full relative'}>
//                 <Topbar activeCategory={activeCategory} setActiveCategory={setActiveCategory} allCategories={allCategories} setAllCategories={setAllCategories}/>
//       <div className={'flex justify-center text-center relative mt-5 p-0'}>
//           <img  
//             className={'h-5/6 w-full z-0'}  
//                 alt='img'
//                 src={`/images/banner.png`}
//           />
//           <h1 className={'text-7xl logo z-50 absolute top-32 text-peach'}>Categories</h1>
//         </div>
//           {/* <h1 className={'absolute left-10 top-96 pt-5'}>hello</h1> */}
//           <div className={'flex flex-row justify-start'}>
//           <button className={'absolute left-10 top-96 mt-8 px-5 py-1 bg-pistachio logo2 text-black text-lg hover-bg-coffe'}>Add A Business</button>
//           <button className={'absolute left-52 top-96 mt-8 px-5 py-1 bg-pistachio logo2 text-black text-lg hover-bg-coffe'}>Choose A Location<i className={'fas fa-caret-down text-md pl-1'} /></button>
//           </div>
//           <h2 className={'logo2-italic text-xl mx-20 border-b border-black'}>North Miami Beach</h2>
//           <div className={'mx-20 my-8 grid grid-cols-12 gap-8'}>
//           <div className={'col-span-3 bg-peach h-80'}>
//              1 
//           </div>
//           <div className={'col-span-3 bg-peach'}>
//               2
//           </div>
//           <div className={'col-span-3 bg-peach'}>
//               2
//           </div>
//           <div className={'col-span-3 bg-peach'}>
//               2
//           </div>
//           <div className={'col-span-3 bg-peach h-80'}>
//              1 
//           </div>
//           <div className={'col-span-3 bg-peach'}>
//               2
//           </div>
//           <div className={'col-span-3 bg-peach'}>
//               2
//           </div>
//           <div className={'col-span-3 bg-peach'}>
//               2
//           </div>
//           </div>
//           </div>
//     </>
//   )
// }

// export default Categories