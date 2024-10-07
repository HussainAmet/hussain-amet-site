import Heading from '@/components/utility/heading/Heading'
import React from 'react'

function MySkillsSection() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "Redux",
    "EJS Template",
    "Figma",
  ]

  return (
    <div>
      <Heading text='My Skills' />
      <div className='mt-10 flex gap-14'>
        <div className='flex-1'>
          <div className='text-[var(--light-white)] font-Inter text-3xl font-semibold mb-8 '>Front End Technologies</div>
          <div className='flex gap-4'>
            {skills.forEach((skill) => {
              <div className='text-3xl text-[var(--white)] font-Inter font-bold'>
                {skill}
              </div>
            })}
          </div>
        </div>
        <div className='h-auto w-[1px] bg-[var(--light-white-20)] '></div>
        <div className=' flex-1'>
          <div className='text-[var(--light-white)] font-Inter text-3xl font-semibold mb-8 ' >Back End Technologies</div>
        </div>
      </div>
    </div>
  )
}

export default MySkillsSection