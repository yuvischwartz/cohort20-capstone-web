import React from 'react'
import Topbar from './Topbar'

function Search(props) {
  return (
      <>
          <div className={'flex justify-center flex-row absolute top-16 max-w-md mx-auto bg-white '}>
            <div className={'w-full'}>
                  <input className={'w-96 px-6 py-3 text-gray-800 focus:outline-none '}
            type={'search'}
            onChange={props.onChange}
            value={props.searchInput}
            placeholder={'Search'} />
              </div>
              
            <button className={'flex items-center bg-black justify-center w-16 h-12 text-white'}>
                  <i className={'fa-solid fa-magnifying-glass'}/>
            </button>
          </div>
          </>
  )
}
// rounded - lg
// rounded - full 
// rounded-r-lg
export default Search