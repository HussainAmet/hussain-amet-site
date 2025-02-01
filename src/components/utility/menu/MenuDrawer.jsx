import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from './MenuIcon'
import ArrowWhite from '/public/icons/common/arrow_white.svg'
import ArrowBlack from '/public/icons/common/arrow_black.svg'
import Link from 'next/link'
import gsap from 'gsap'

function MenuDrawer({ navList, url }) {
  const [isClicked, setIsClicked] = useState(false);
  const drawerRef = useRef(null)
  const splitUrl = url.split("/")[1];

  useEffect(() => {
    if (isClicked) {
      gsap.from(drawerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    }
  }, [isClicked]);

  return (
    <div>
      <div onClick={() => setIsClicked(!isClicked)}>
        <MenuIcon clicked={isClicked} />
      </div>
      {
        isClicked ?
          <div className='absolute h-[100vh] w-full bg-[#0E090D75] left-0 z-50'>
            <div ref={drawerRef} className='mt-6 flex flex-col py-6 bg-[var(--white)] font-aptly-medium-italic text-lg rounded-[24px]' >
              {
                navList.map((item, index) => (
                  <Link key={index} onClick={() => setIsClicked(!isClicked)} href={"/" + item.href} className={`flex justify-between items-center ${splitUrl == item.href ? 'bg-[var(--black)] text-[var(--white)]' : 'bg-[var(--white)] text-[var(--black)]'} pl-8 pr-4 py-8 `} >
                    <div>
                      {item.text}
                    </div>
                    {
                      splitUrl == item.href ?
                        <ArrowWhite />
                        :
                        <ArrowBlack />
                    }
                  </Link>
                ))
              }
            </div>
          </div>
        : ''
      }
    </div>
  )
}

export default MenuDrawer;