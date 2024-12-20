"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import AboutCourse from './aboutcourse/page'

const layout = ({children}) => {
    const pathName= usePathname()
    console.log(pathName)
  return (
    <div>
        {
            pathName != "/about/aboutcourse" ? (
                <div>
                    <h1>Common Layout Header</h1>
                    {children}
                    <h1>Common Layout Footer</h1>
                </div>
            ):(
                <AboutCourse/>
            )
        }
    </div>
  )
}

export default layout