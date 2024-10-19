import Link from 'next/link'
import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className='flex w-full xl:px-[64px] lg:px-[16px] px-[12px] items-center justify-center'>
            <div className='w-full max-w-[1920px] mx-auto'>
                <div className='xl:mt-[88px] mt-16'>
                    <div className='
                        font-Inter font-bold text-[var(--light-white)]
                        xl:text-base
                        lg:text-sm
                        text-xs mb-8
                    ' >
                        <p>©{year} Craon Tech</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer