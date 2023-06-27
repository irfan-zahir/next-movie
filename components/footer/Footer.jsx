import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-row lg:h-[560px]'>
            {/* right portion */}
            <div className='flex flex-col flex-1 bg-[#3d3d3d] text-white lg:pl-[105px] lg:pr-[135px] pt-[93px]'>
                <div className='text-[64px]'>PcariMovie</div>
                <div className='leading-8 mb-10 mt-8 w-[320px]'>
                    Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.
                </div>
                <div className='font-bold mb-6'>Join Newsletters</div>
                <div className="relative w-fit">
                    <input type="text" className='h-16 w-[282px] pl-4 bg-[#525252] text-black/50 rounded-lg outline-0' placeholder='Insert your email here' />
                    <div className='material-symbols-outlined absolute text-black top-[50%] translate-y-[-50%] right-[10px] bg-yellow-500 h-12 w-12 rounded-lg flex items-center justify-center'>
                        &#xe941;
                    </div>
                </div>
            </div>
            {/* left portion */}
            <div className='flex flex-col flex-[2_2_0%] bg-[#2e2e2e] lg:pt-[133px] pb-[100px] pl-16 justify-between'>
                <div className='flex flex-row gap-[160px] text-[#e6e6e6]'>
                    <div className='flex flex-col gap-6'>
                        <span className='text-white font-bold'>Product</span>
                        <span>Movies</span>
                        <span>TV Show</span>
                        <span>Videos</span>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <span className='text-white font-bold'>Media Group</span>
                        <span>Nice Studio</span>
                        <span>Nice News</span>
                        <span>Nice TV</span>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <span className='text-white font-bold'>Product</span>
                        <span>About</span>
                        <span>Careers</span>
                        <span>Press</span>
                    </div>
                </div>
                <div className='text-white flex flex-row gap-6'>
                    <div className='flex flex-row gap-2'>
                        <i>&#xe0c8;</i>
                        <span>8819 Ohio St. South Gate, California 90280</span>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <i>&#xe158;</i>
                        <span>ourstudio@hello.com</span>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <i>&#xe0b0;</i>
                        <span>+271 386-647-3637</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer