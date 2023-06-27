import React from 'react'
import { useSearchContext } from '../../providers/SearchProvider'

const SearchInput = () => {
    const { setValue, value } = useSearchContext()

    return (
        <div className='lg:w-[600px] lg:ml-[127px]'>
            <div className='text-5xl mb-6 font-bold'>Search your movies here!</div>
            <div className="relative mb-6">
                <div className='material-symbols-outlined absolute text-black mr-12 input-icon'>&#xE8B6;</div>
                <input type="text" className='w-full h-[54px] pl-14 text-black/50 rounded-full outline-0' placeholder='Theatre name...' />
            </div>

            {/* date range */}
            <div className='flex flex-row gap-3 mb-4'>
                <div className="relative flex flex-1">
                    <input type="date" className='w-full h-[54px] text-black/50 rounded-full outline-0' placeholder='Theatre name...' />
                </div>
                <div className="relative flex flex-1">
                    <input type="date" className='w-full h-[54px] text-black/50 rounded-full outline-0' placeholder='Theatre name...' />
                </div>
            </div>

            <button className='bg-yellow-500 active:bg-yellow-700 active:text-white rounded-full px-[44px] py-[15px] text-black font-bold'>
                Search
            </button>

        </div>
    )
}

export default SearchInput