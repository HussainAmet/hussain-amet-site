"use clien"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function SnapShotsSection({ projectData }) {
    const [snapshotsCount, setSnapshotsCount] = useState(2)
  return (
    <>
        <div
            className='
                grid auto-cols-auto
                xl:gap-12
                lg:gap-12
                gap-7
            '
        >
            {projectData.quickLinks["UI Snapshots"].map((snapshot, index) => 
                index < snapshotsCount ? (
                    <Image
                        key={index}
                        src={snapshot}
                        alt="image"
                        width={900}
                        height={900}
                        id={`${index === 2 ? "third-snapshot" : "" || index === 1 ? "second-snapshot" : ""}`}
                        className="
                            border-[2px] border-[var(--light-white)] rounded-xl w-full h-auto
                        "
                    />
                ) : null
            )}
        </div>
        <center>
            <div
                className='
                    flex gap-2 items-center w-fit cursor-pointer linkHover
                '
                onClick={() => setSnapshotsCount(snapshotsCount === projectData.quickLinks["UI Snapshots"].length ? 2 : projectData.quickLinks["UI Snapshots"].length)}
            >
                <Image
                    src="/icons/common/arrow-blue.png"
                    alt='arrow'
                    width="30"
                    height="30"
                />
                <Link
                    href={snapshotsCount === projectData.quickLinks["UI Snapshots"].length ? "#second-snapshot" : "#third-snapshot"}
                    className='
                        font-Inter font-medium text-base text-[var(--accent)] underline underline-offset-4
                    '
                >
                    {snapshotsCount === projectData.quickLinks["UI Snapshots"].length ? "Show Less" : "Show More"}
                </Link>
            </div>
        </center>
    </>
  )
}

export default SnapShotsSection