"use client"
import React, { useRef, useState } from 'react'
import Link from "next/link"

export default function Navbar() {
  const [isOpenImageNav, setIsOpenImageNav] = useState(false)
  const [isOpenVideoNav, setIsOpenVideoNav] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpenToogleNav, setIsOpenToogleNav] = useState(false)
  const openRefImage = useRef(null)
  const openRefVideo = useRef(null)

  const handleClickOutside = (e) => {
    if (!openRefImage?.current?.contains(e.target)) {
      setIsOpenImageNav(false)
    }
    if (!openRefVideo?.current?.contains(e.target)) {
      setIsOpenVideoNav(false)
    }
  }
  const handleOpenImageNav = () => {
    setIsOpenImageNav(!isOpenImageNav)
  }
  const handleOpenVideoNav = () => {
    setIsOpenVideoNav(!isOpenVideoNav)
  }
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('mousedown', handleClickOutside)
  }
  const navigations = {
    images: [
      {
        name: '480p (SD)',
        link: 'img-480p'
      },
      {
        name: '720p (HD)',
        link: 'img-720p'
      },
      {
        name: '1080p (FULL HD)',
        link: 'img-1080p'
      },
      {
        name: '2K',
        link: 'img-2k'
      },
      {
        name: '4K',
        link: 'img-4k'
      },
    ],
    videos: [
      {
        name: '480p (SD)',
        link: 'vid-480p'
      },
      {
        name: '720p (HD)',
        link: 'vid-720p'
      },
      {
        name: '1080p (FULL HD)',
        link: 'vid-1080p'
      },
      {
        name: '2K',
        link: 'vid-2k'
      },
      {
        name: '4K',
        link: 'vid-4k'
      },
    ]
  }
  return (
    <nav className="flex justify-between items-center border relative z-50">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-3xl font-bold py-2 uppercase text-black">
              Testing Skripsi
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button type="button" className="block absolute right-3 px-2 py-1 lg:hidden" onClick={() => setIsOpenToogleNav(!isOpenToogleNav)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <div className={`${!isOpenToogleNav ? 'invisible opacity-0 lg:visible lg:opacity-100' : 'block'} p-3 absolute py-5 bg-white shadow-lg rounded-lg max-w-[150px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all `}>
              <ul className="flex flex-col gap-y-2 lg:flex-row lg:items-center md:gap-x-10 " >
                <li className="hover:text-slate-700 pb-1 lg:pb-0 border-b lg:border-0 ">
                  <Link href='/'>Home</Link>
                </li>
                <li className="hover:text-slate-700 relative pb-1 lg:pb-0 border-b lg:border-0" ref={openRefImage}>
                  <button className="flex items-center space-x-1" onClick={handleOpenImageNav} >
                    <span>Images</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div className={`border rounded bg-white w-36 max-w-md absolute top-full  lg:mt-2 -ms-8 -left-full lg:ms-3 ${isOpenImageNav ? 'block' : 'hidden'}`} >
                    <ul>
                      {navigations.images.map((imageNav, i) => (
                        <Link
                          key={i}
                          href={`/image/${imageNav.link}`}
                          className={`${i === hoveredIndex && 'text-slate-600 bg-slate-50'} p-1.5 block border-b`}
                          onMouseEnter={() => handleMouseEnter(i)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {imageNav.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="hover:text-slate-700 relative pb-1 lg:pb-0 border-b lg:border-0" ref={openRefVideo}>
                  <button className="flex items-center space-x-1 " onClick={handleOpenVideoNav} >
                    <span>Videos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div className={`border rounded bg-white w-36 max-w-md absolute top-full  lg:mt-2 -ms-8 -left-full lg:ms-3 ${isOpenVideoNav ? 'block' : 'hidden'}`} >
                    <ul>
                      {navigations.videos.map((videoNav, i) => (
                        <Link
                          key={i}
                          href={`/video/${videoNav.link}`}
                          className={`${i === hoveredIndex && 'text-slate-600 bg-slate-50'} p-1.5 block border-b`}
                          onMouseEnter={() => handleMouseEnter(i)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {videoNav.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div >
      </div >
    </nav >
  )
}
