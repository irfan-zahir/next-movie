import { useRouter } from 'next/router';
import React from 'react'
import { useSearchContext } from '../../providers/SearchProvider';

const menus = [
  ["Home", "/"],
  ["Movies", "/movies"],
  ["TV Show", "/tv-show"],
  ["Video", "/video"],
  ["FAQ", "/faq"],
  ["Pricing", "/pricing"],
  ["Contact Us", "/contact"]
];

const Header = () => {
  const router = useRouter()
  const { showInput, setshowInput, reset } = useSearchContext()

  const onClickSearch = (e) => {
    e.preventDefault()
    // router.push("?search=")
    // !showInput &&
    setshowInput(!showInput)
  }

  return (
    <header className='px-[103px] h-[104px] flex flex-row items-center absolute w-full'>
      {/* left portion */}
      <div className="flex flex-1 flex-row items-center">

        {/* brand */}
        <div className='font-[700] text-white text-[32px]'>PcariMovie</div>
        {/* menus */}
        <div className="flex flex-row gap-12 ml-[35px]">
          {
            menus.map(([title, url], i) => {
              const isCurrent = router.pathname === url
              const onClick = (e) => {
                e.preventDefault()
                if (url === "/") reset()
              }

              return (
                <div className='flex flex-col items-center justify-center h-8' key={i}>
                  <a href={url} onClick={onClick} className='text-white font-bold'>{title}</a>
                  {isCurrent && <div className='h-1 w-10 bg-yellow-500 mt-1'></div>}
                </div>
              )
            })
          }
        </div>
      </div>

      {/* right portion */}
      <div className="flex flex-row items-center">
        {/* search */}
        <a href="?search=" onClick={onClickSearch}>
          <span className='material-symbols-outlined text-white mr-12'>&#xE8B6;</span>
        </a>
        {/* avatar */}
        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://www.thecolorapi.com/id?format=svg&named=false&hex=1e1e1e" alt="John Glich" />
        {/* name */}
        <span className='text-white font-bold ml-4'>John Glich</span>
      </div>
    </header>
  )
}

export default Header