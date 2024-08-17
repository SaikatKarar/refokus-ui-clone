import React from 'react'

import Tools1 from '../assets/img/Tools-1.png'
import Tools2 from '../assets/img/Tools2.png'
import Tools3 from '../assets/img/Tools-3.png'
import Tools4 from '../assets/img/Tools-4.png'
import Tools5 from '../assets/img/Tools-5.png'
import Tools6 from '../assets/img/Tools-6.png'

function Work() {

    const images = [
        { url: Tools1, top: "50%", left: "50%", isActive: true },
        { url: Tools2, top: "56%", left: "44%", isActive: false },
        { url: Tools3, top: "45%", left: "56%", isActive: false },
        { url: Tools4, top: "60%", left: "53%", isActive: false },
        { url: Tools5, top: "43%", left: "40%", isActive: false },
        { url: Tools6, top: "65%", left: "55%", isActive: false },
    ]

    return (
        <div className='w-full'>
            <div className='relative max-w-screen-lg m-auto'>
                <h1 className='text-[32vw] leading-none text-center font-medium tracking-tight select-none'>Work</h1>
                <div className='absolute top-0 w-full h-full'>
                    {images.map((elem, idx) => (elem.isActive && (<img key={idx} className='absolute w-16 sm:w-28 md:w-40 lg:w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{ top: elem.top, left: elem.left }} alt='' />)))}
                </div>
            </div>
        </div>
    )
}

export default Work