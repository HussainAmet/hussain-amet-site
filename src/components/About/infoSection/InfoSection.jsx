import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import socialMediaLinks from '@/json/socialMediaLinks';

function InfoSection() {
  return (
    <div
        className='
            flex flex-col gap-11
            lg:gap-9
        '
    >
        <div className='font-aptly-regular'>
            <p
                className='
                    text-center
                    xl:text-[55px] xl:mb-16 xl:leading-[75px]
                    lg:text-[50px] lg:mb-9 lg:leading-[65px]
                    text-[27px] mb-8 leading-[38px]
                '
            >
                I craft <span className='text-[var(--accent)] font-medium xl:text-[65px] lg:text-6xl text-[32px]'>dynamic</span> and <span className='text-[var(--accent)] font-medium xl:text-[65px] lg:text-6xl text-[32px]'>seamless</span> digital experiences by combining <span className='text-[var(--accent)] font-medium xl:text-[65px] lg:text-6xl text-[32px]'>frontend</span> and <span className='text-[var(--accent)] font-medium xl:text-[65px] lg:text-6xl text-[32px]'>backend</span> development.
            </p>
            <div
                className='
                    flex
                    xl:flex-row xl:gap-20 xl:text-4xl xl:justify-center
                    lg:text-4xl
                    flex-col gap-8 text-xl
                '
            >
                <p
                    className='
                        xl:w-[570px]
                        w-full
                    '
                >My creative journey began 2 years ago when I discovered a passion for building interactive digital experiences. Driven by curiosity and a desire to learn, I spent countless hours exploring frontend and backend development. Through online resources and personal projects, I continuously honed my skills and deepened my knowledge.</p>
                <p
                    className='
                        xl:w-[570px]
                        w-full
                    '
                >Since diving into web development, I have pursued a professional career where I apply my skills to create innovative solutions. I am passionate about contributing as a full-time developer, eager to bring dynamic ideas to life and continue my growth in this ever-evolving field.</p>
            </div>
        </div>
        <Link href={socialMediaLinks.CV} className='flex gap-4 self-center' target='_blank'>
            <Image src='/icons/common/Download_blue.svg' alt='image' width={24.44} height={20} />
            <p className='text-[var(--accent)] underline underline-offset-4'>Download CV</p>
        </Link>
    </div>
  )
}

export default InfoSection