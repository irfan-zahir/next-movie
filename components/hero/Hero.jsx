import React from 'react'
import { useRouter } from 'next/router'
import { useSearchContext } from '../../providers/SearchProvider'
import SearchInput from './SearchInput'

const Hero = () => {

    const { showInput, setValue, setshowInput, value } = useSearchContext()

    return (
        <section className='h-full gradient-bg px-[214px] flex flex-row flex-1 items-center justify-between text-white'>

            <div className='group hover:cursor-pointer' onClick={() => setshowInput(true)}>
                <svg width="274" height="274" viewBox="0 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="play 1" clip-path="url(#clip0_701_2)">
                        <path id="Vector" d="M137 197.889C170.628 197.889 197.889 170.628 197.889 137C197.889 103.372 170.628 76.1113 137 76.1113C103.372 76.1113 76.1113 103.372 76.1113 137C76.1113 170.628 103.372 197.889 137 197.889Z" fill="#FED530" />
                        <path id="Vector_2" d="M125.583 155.778V118.221L153.744 137L125.583 155.778ZM129.389 125.334V148.666L146.894 137L129.389 125.334Z" fill="black" />
                        <g id="Group 12" className='group-hover:animate-spin origin-center ease-in-out'>
                            <path id="Vector_3" d="M274 137C274 212.663 212.663 274 137 274C61.337 274 0 212.663 0 137C0 61.337 61.337 0 137 0C212.663 0 274 61.337 274 137ZM2.73999 137C2.73999 211.15 62.8502 271.26 137 271.26C211.15 271.26 271.26 211.15 271.26 137C271.26 62.8502 211.15 2.73999 137 2.73999C62.8502 2.73999 2.73999 62.8502 2.73999 137Z" fill="#808080" />
                            <path id="Vector_4" d="M271.26 137C272.773 137 274.003 138.227 273.973 139.74C273.472 164.783 266.113 189.23 252.673 210.408C238.743 232.359 218.855 249.892 195.332 260.961C171.809 272.03 145.622 276.178 119.829 272.92C94.037 269.661 69.7042 259.132 49.6729 242.56C29.6416 225.989 14.7389 204.06 6.70526 179.335C-1.32835 154.61 -2.16116 128.11 4.30411 102.929C10.7694 77.7491 24.2658 54.9279 43.217 37.1315C61.502 19.9608 84.1365 8.15177 108.642 2.96716C110.123 2.65394 111.559 3.63184 111.842 5.11829C112.126 6.60475 111.15 8.03676 109.669 8.35122C86.185 13.3402 64.4952 24.6674 46.9684 41.1262C28.7752 58.2108 15.8186 80.1192 9.61194 104.292C3.40528 128.466 4.20478 153.906 11.917 177.642C19.6293 201.378 33.936 222.429 53.166 238.338C72.396 254.246 95.7555 264.355 120.516 267.483C145.277 270.611 170.416 266.629 192.998 256.003C215.581 245.376 234.673 228.544 248.046 207.472C260.929 187.171 267.991 163.743 268.491 139.74C268.523 138.227 269.747 137 271.26 137Z" fill="#FED530" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_701_2">
                            <rect width="274" height="274" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
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