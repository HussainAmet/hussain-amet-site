import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import socialMediaLinks from '@/json/socialMediaLinks';
import Text from '@/components/utility/text/Text';

function ContactMeSection() {
    return (
        <div className='
            border-[2px] border-[var(--light-white)] rounded-[45px] font-aptly-medium-italic
            xl:px-24 xl:py-11
            px-8 py-16
        '>
            <div className='
                flex flex-col gap-11
            '>
                <Text text='Contact Me' className='xl:text-7xl text-4xl font-aptly-medium-italic xl:w-fit lg:w-fit md:w-fit sm:w-fit'/>
                <div className='
                    flex justify-between text-xl text-[var(--accent)]
                    md:flex-col md:gap-11
                    sm:flex-col sm:gap-11
                '>
                    <Link href={socialMediaLinks.linkedIn} className='flex gap-4' target='_blank'>
                        <Image src='/icons/common/Link_blue.svg' alt='image' width={20} height={20} />
                        <p>Let&apos;s Connect</p>
                    </Link>
                    <Link href={socialMediaLinks.email} className='flex gap-4'>
                        <Image src='/icons/common/mail.svg' alt='image' width={25} height={20} />
                        <p>Email Me</p>
                    </Link>
                    <Link href={socialMediaLinks.CV} className='flex gap-4' target='_blank' download="Hussain_Amet_CV.pdf">
                        <Image src='/icons/common/Download_blue.svg' alt='image' width={24.44} height={20} />
                        <p>Download CV</p>
                    </Link>
                    <Link href={socialMediaLinks.github} className='flex gap-4' target='_blank' >
                        <Image src='/icons/common/Github.svg' alt='image' width={18.33} height={20} />
                        <p>Github</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactMeSection