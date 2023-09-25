import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='bg-yellow-500 h-1/6 min-w-screen flex flex-col flex-grow justify-evenly items-center w-s '>
        <div className="flex flex-row-">
        <div className="text-5xl mr-10 ">🎒</div>
    <div className="font-bold text-5xl ">FAR AWAY</div>
    <div className="text-5xl  ml-10">🌴</div>

    </div>
  
    </div>
  )
}