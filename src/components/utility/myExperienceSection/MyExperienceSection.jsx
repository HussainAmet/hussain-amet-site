import React from 'react'
import Heading from '../heading/Heading'
import { headers } from 'next/headers';
import LearnMore from '../learnMore/LearnMore';

const MyExperienceSection = () => {
    const device = headers().get('x-device-type') || 'desktop';
    return (
        <div>
            <Heading text={device == 'desktop' ? "My Experience" : "Experience"} />
            <div className="mt-11 text-center">
                <LearnMore text="View More" href="/my-projects" />
            </div>
        </div>
    )
}

export default MyExperienceSection