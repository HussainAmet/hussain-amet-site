import Image from 'next/image'
import React from 'react'
import '@/components/utility/loader/style.css'
import Logo from '/public/images/header/Logo.png'

export default function Loader() {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center' >
      <div className="loader xl:h-[400px] xl:w-[400px] h-[250px] w-[250px] ">
        <div className="box">
          <div className="logo">
            <Image src={Logo} alt='image' />
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  )
}