import Image from 'next/future/image'
import React from 'react'

function ResultCard({ movie: {
    Title,
    Duration,
    Views,
    Genre,
    Poster,
    ...movie
} }) {

    return (
        <div className='relative lg:h-[560px] group hover:cursor-pointer hover:ease-in hover:duration-500 rounded-lg overflow-hidden'>
            <Image fill sizes='100%' loader={() => Poster} src={Poster} className='group-hover:z-[-1] group-hover:opacity-50 group-hover:scale-[1.1] group-hover:ease-in group-hover:duration-200' alt={`Poster: ${Title}`} />
            <div className='flex h-full flex-col justify-between gradient-result-card p-6'>
                {/* genre */}
                <span className='w-fit bg-yellow-500 text-sm px-[13px] py-[1.5px] rounded-full capitalize'>
                    {Genre}
                </span>
                {/* movie detail */}
                <div>
                    {/* stats */}
                    <div className="flex flex-row gap-6 mb-5">
                        <span className="flex flex-row text-[#9A9AB0]">
                            <i className='mr-2.5'>&#xe8b5;</i>
                            {Duration}
                        </span>
                        <span className="flex flex-row text-[#9A9AB0]">
                            <i className='mr-2.5'>&#xe8f4;</i>
                            {Views}
                        </span>
                    </div>
                    {/* title */}
                    <div className='text-5xl text-white font-bold'>{Title}</div>
                </div>
            </div>
        </div>
    )
}

export default ResultCard