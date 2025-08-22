import Heading from '@/components/utility/heading/Heading'
import Line from '@/components/utility/line/Line'
import React from 'react'
import siteData from "@/json/siteData.json";
import { headers } from 'next/headers';

function MyEduationSection() {
  const device = headers().get('x-device-type') || 'mobile';
  return (
    <div>
        <Heading text={device == 'desktop' ? "My Education" : "Education"} />
        <div
          className='
            flex flex-col
            xl:mt-10
            mt-8 gap-14
          '
        >
          {
            siteData.educations.map((education, index) => (
              <div className='flex flex-col' key={index}>
                <div className='flex xl:items-center lg:items-center'>
                  <div className={`w-3 h-3 ${index === 0 ? "bg-green-500" : "bg-[var(--accent)]"} rounded-sm rotate-45 md:mt-2 sm:mt-2`}></div>
                  <div
                    className='
                      grid font-Inter font-bold items-center
                      xl:ml-7 xl:gap-10 xl:grid-cols-[auto_auto_auto] xl:text-3xl xl:grid-flow-col
                      lg:gap-5 lg:grid-cols-[auto_auto_auto] lg:text-[22px]
                      ml-3 gap-2 grid-cols-2 text-xl
                    '
                  >
                    <p className='md:col-span-2 sm:col-span-2'>
                      {education.degree}
                    </p>
                    <div>
                      <Line direction='left' className="flex-1 xl:w-[75px] w-9 md:hidden sm:hidden" />
                    </div>
                    <p className='sm:col-span-2 md:col-span-2 sm:text-base md:text-base'>
                      {education.institution}
                    </p>
                  </div>
                </div>
                <div className='flex flex-row items-center mt-6'>
                  <Line direction='left' className="flex-1" />
                  <p
                    className='
                      font-Inter pl-10 text-[var(--light-white)] font-semibold
                      xl:text-xl
                      lg:text-lg
                      text-xs
                    '
                  >{education.graduationYear}</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default MyEduationSection