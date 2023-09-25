'use client'
import React from 'react'
import { useState } from 'react'
import Header from '../Header/Header'
import Fragement from '../Fragement/Fragement'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'



export default function Total(){
  const[box_number,setBox_number] = useState(1)
  const[trigger,set_Trigger] = useState(false)
  const[input,set_Input] = useState("")
  const[arr,setArr] = useState([])
  
  return (
    <>
    <div className="h-screen flex flex-col">
    <Header/>
    <Fragement  box_number={box_number}  setBox_number={setBox_number} input={input} set_Input={set_Input} trigger={trigger} set_Trigger ={set_Trigger} arr={arr} setArr={setArr}/>
    <Hero input={input} box_number={box_number} trigger={trigger}  arr={arr} setArr={setArr}/>
    <Footer arr={arr}/>
    </div>
   
    
    </>
  )
}