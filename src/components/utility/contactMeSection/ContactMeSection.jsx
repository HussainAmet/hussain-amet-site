import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import socialMediaLinks from '@/json/socialMediaLinks';
import Text from '@/components/utility/text/Text';

function ContactMeSection() {
    const contacts = [
        {
            label: "Let's Connect",
            image: '/icons/common/Link_blue.svg',
            link: socialMediaLinks.linkedIn
        },
        {
            label: 'Email Me',
            image: '/icons/common/mail.svg',
            link: socialMediaLinks.email
        },
        {
            label: 'Download CV',
            image: '/icons/common/Download_blue.svg',
            link: socialMediaLinks.CV
        },
        {
            label: 'Github',
            image: '/icons/common/Github.svg',
            link: socialMediaLinks.github
        }
    ]
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
                    {contacts.map(contact => (
                        <Link key={contact.label} href={contact.link} className='flex gap-4' target='_blank'>
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