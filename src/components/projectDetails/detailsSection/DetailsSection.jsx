"use client"
import Line from '@/components/utility/line/Line'
import React, { useEffect, useState } from 'react'
import UnOrderedList from '../unOrderedList/UnOrderedList'
import SnapShotsSection from '../snapshotsSection/SnapShotsSection'
import OrderedList from '../orderedList/OrderedList'
import { useParams } from 'next/navigation';
import siteData from "@/json/siteData.json";
import Link from 'next/link'

function DetailsSection() {
  const { project } = useParams();
  const projectData = siteData.projects[project];
  const [activeLink, setActiveLink] = useState("UI Snapshots");

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id.replaceAll("-", " "));
        }
      });
    }, observerOptions);
  
    sections.forEach(section => observer.observe(section));
  
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
  
  return (
    <div
      className='
        flex
        xl:gap-24 xl:flex-row
        lg:gap-12
        gap-7 flex-col
      '
    >
      <div
        className='
          flex flex-col text-[var(--light-white)]
          xl:gap-12 xl:top-24 xl:sticky xl:h-full
          gap-7
        '
      >
        <div
          className='
            flex gap-9 items-center
          '
        >
          <div>
            <p
              className='
                font-Inter whitespace-nowrap
                xl:text-lg
                lg:text-base
                text-sm
              '
            >
              Quick Links
            </p>
          </div>
          <Line direction="left" className='xl:w-11 bg-[var(--light-white-20)]' />
        </div>
        <div>
          <ul
            className='
              flex font-aptly-medium-italic text-lg gap-5 whitespace-nowrap no-scrollbar pl-1
              xl:flex-col
              flex-row overflow-x-auto
            '
          >
            {
              Object.keys(projectData.quickLinks).map((link, index) => (
                <li key={index}
                  className='
                    flex gap-2 text-[var(--white)] linkHover
                    xl:items-center xl:flex-row
                    flex-col-reverse
                  '
                >
                  <div
                    className={`
                      ${activeLink === link ? "bg-[var(--accent)]" : "bg-[var(--black)]"}
                      xl:w-2 xl:h-2 xl:rounded-sm xl:rotate-45
                      w-auto h-[1px]
                    `}
                  ></div>
                  <Link href={`#${link.replaceAll(" ", "-")}`}>{link}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      
      <div
        className='
          bg-[var(--light-white-20)] 
          xl:w-[1px]
          lg:h-[1px]
          md:h-[1px]
          sm:h-[1px]
        '
      >
      </div>

      <div
        className='
          flex-1 flex flex-col
          gap-12
        '
      >
        <div
          className='
            xl:flex xl:gap-9 xl:items-center text-[var(--light-white)] w-full
            hidden whitespace-nowrap
          '
        >
            <p
              className='
                font-Inter 
                xl:text-lg
              '
            >
              {projectData.title}
            </p>
          <Line direction="left" className='bg-[var(--light-white-20)]' />
        </div>

          {
            Object.keys(projectData.quickLinks).map((link, index) => (
              <div
                key={index}
                className='
                  flex flex-col
                  xl:gap-12
                  lg:gap-12
                  gap-7
                '
              >
              <section id={link.replaceAll(" ", "-")}>
                <div
                  className='
                    flex flex-col gap-7
                  '
                >
                    <h1
                      className="
                          font-aptly-medium-italic
                          xl:text-4xl
                          lg:text-3xl
                          text-2xl
                        "
                    >
                      {link}
                    </h1>
                    {
                      link === "UI Snapshots" ?
                      <SnapShotsSection projectData={projectData} />
                    :
                      projectData.quickLinks[link].map((item, index) => 
                        item.title || item.description ?
                          (
                            <div key={index}>
                              <UnOrderedList title={item.title} description={item.description} />
                            </div>
                          )
                        :
                          item.listTitle || item.list ?
                          (
                            <div key={index}>
                              <OrderedList listTitle={item.listTitle} list={item.list} />
                            </div>
                          ) : null
                      )
                    }
                </div>
              </section>
              {
                index !== (Object.keys(projectData.quickLinks).length - 1) ?
                  <Line direction="left" />
                : null
              }
          </div>
            ))
          }
      </div>
    </div>
  )
}

export default DetailsSection