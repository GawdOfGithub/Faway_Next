'use client';
import React from 'react';
import { useState } from 'react';

type Props = {
  box_number: number;
  input: string;
  set_Input: (input: string) => void;
  setBox_number: (boxNumber: number) => void;
  trigger:boolean
  set_Trigger:(value:boolean)=> void
  setArr:(value:any)=>void
  arr:any

};

export default function Fragment({ box_number, setBox_number, input, set_Input,trigger,set_Trigger,setArr,arr}: Props) {
  const numbers = Array.from({ length: 5 }, (_, index) => index + 1);

  const [dropdown, setDropdown] = useState(false);
  const [checked, isChecked] = useState(false);

  function handleClick() {
    setDropdown(!dropdown);
  }

  function handleNumber(number: number) {
    setDropdown(!dropdown);
    setBox_number(number);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    set_Trigger(true)
    if(trigger && input!="")
    {
      setArr((prevArr:any) => [...prevArr, { input, box_number,checked}]);
    console.log(arr)
    }
    
  
    setDropdown(false);
    setBox_number(1);
    set_Input('');
  }

  return (
    <form className="bg-yellow-800 flex flex-row h-1/6 min-w-full justify-center items-center mx-auto relative" onSubmit={handleSubmit}>
      <div className="text-xl font-bold mr-5">What do you need for your 😍 trip?</div>
      <div className="flex flex-col">
        <button
          className="bg-white text-black font-black ml-2 py-5 px-10 rounded-full m-3"
          onClick={handleClick}
          type="button"
        >
          {box_number} <span className="">&#8964;</span>
        </button>
        {dropdown && (
          <div className="bg-white border rounded-full shadow-lg absolute top-20">
            <div className="flex flex-col">
              {numbers.map((number) => (
                <button
                  className="p-3 rounded-xl text-black"
                  key={number}
                  value={number}
                  type="button"
                  onClick={() => handleNumber(number)}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <input
        type="text"
        value={input}
        className="rounded-full text-black font-bold placeholder-gray-400::placeholder bg-gray-100 p-5"
        onChange={(e) => set_Input(e.target.value)}
        placeholder="Input..."
      />
      <button className="bg-blue-500 py-5 px-10 rounded-full ml-5">ADD</button>
    </form>
  );
}
