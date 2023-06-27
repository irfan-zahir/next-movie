import React from 'react'
import ResultCard from './ResultCard'

const Content = () => {
    return (
        <section className='pt-[133px] px-[104px]'>
            <div className="mb-9 text-5xl text-white font-semibold"><span>Search Results</span></div>
            <div className="grid grid-cols-3 gap-4">
                {
                    Array(6).fill(0).map((_, i) => <ResultCard key={i} />)
                }
            </div>
        </section>
    )
}

export default Content
