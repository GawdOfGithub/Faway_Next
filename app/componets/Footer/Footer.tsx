import React from 'react'

type Props = {
  arr:any
}

export default function Footer({arr}: Props) {
  return (
    <>
    <div className="bg-blue-400 h-1/6 flex flex-col justify-center items-center">
       {
        arr.length==0 ?(
    <div className="text-3xl"> Start adding some items to your packing list 🚀</div>):
(<div className="text-3xl"> Here you go sir 🚀</div>)

       }
    </div>
    </>
  )
}