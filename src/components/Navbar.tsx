import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import NavLogo from '@public/assets/navLogo.png'

export const ListData = [
  { link: '/', text: 'Home' },
  { link: '/about', text: 'About' },
  { link: 'skills', text: 'Skills' },
  { link: 'projects', text: 'Projects' },
  { link: 'contact', text: 'Contact' },
]

export const Navbar = () => (
  <div data-layout="Navbar" className="fixed z-[100] h-20 w-full shadow-xl">
    <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
      <Image src={NavLogo} width="125" height="50" alt="ロゴ" />
      <div>
        <ul className="hidden md:flex">
          {ListData.map((data, index) => (
            <li key={index} className="ml-10 text-sm uppercase hover:border-b">
              <Link href={data.link}>{data.text}</Link>
            </li>
          ))}
        </ul>
        <div>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  </div>
)
