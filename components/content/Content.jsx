import React from 'react'
import ResultCard from './ResultCard'
import { useSearchContext } from '../../providers/SearchProvider'

const Content = () => {
    const { displayedMovies, value } = useSearchContext()

    console.log({ displayedMovies, value })

    return (
        <section className='pt-[133px] px-[104px] mb-[164px]'>
            <div className="mb-9 text-5xl text-white font-semibold">
                <span>
                    {
                        value === null ? "New Releases" : "Search Results"
                    }
                </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    displayedMovies
                        .map((movie, i) => <ResultCard key={i} movie={movie} />)
                }
            </div>
        </section>
    )
}

export default Content
