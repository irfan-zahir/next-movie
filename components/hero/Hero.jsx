import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import play from "../../public/play.svg"
import { useSearchContext } from '../../providers/SearchProvider'
import SearchInput from './SearchInput'

const Hero = () => {

    const { showInput, setValue, setshowInput } = useSearchContext()

    console.log({ showInput })

    return (
        <section className='h-full gradient-bg px-[214px] flex flex-row flex-1 items-center justify-between text-white'>
            <Image src={play} />
            {
                showInput ? <SearchInput /> : <InitialHero onClick={() => setshowInput(true)} />
            }
        </section>
    )
}

const InitialHero = ({ onClick }) => (
    <div className='flex flex-col lg:w-[600px] lg:ml-[148px]'>
        <span onClick={onClick} className='text-7xl mb-6 hover:cursor-pointer font-bold'>Find your movies here!</span>
        <span className='lg:w-[502px]' >
            Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads.
        </span>
    </div>
)

export default Hero