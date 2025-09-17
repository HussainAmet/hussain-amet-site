import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import siteData from '@/json/siteData';
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
                <Text noref={true} text='Contact Me' className='xl:text-7xl text-4xl font-aptly-medium-italic xl:w-fit lg:w-fit md:w-fit sm:w-fit'/>
                <div className='
                    flex justify-between text-xl text-[var(--accent)]
                    md:flex-col md:gap-11
                    sm:flex-col sm:gap-11
                '>
                    {siteData.contacts.map(contact => (
                        <Link key={contact.label} href={contact.link} className='flex gap-4 linkHover' target='_blank'>
                            <Image src={contact.image} alt='image' width={20} height={20} />
                            <p>{contact.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactMeSection