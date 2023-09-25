import React from 'react';

type Props = {
  box_number: number;
  input: string;
  trigger: boolean;
  arr: any;
  setArr: (value: any) => void;
};

export default function Hero({ box_number, input, trigger, arr, setArr }: Props) {
  console.log(arr);

  function remove(index: number) {
    const newArr: any = arr.filter((item: any, itemIndex: number) => itemIndex !== index);
    setArr(newArr);
  }

  return (
    <>
      <div className="h-2/5 min-w-screen bg-red-950 flex flex-row items-start">
        {trigger &&
          arr.map((item: any, index: number) => (
            <div key={index} className='mr-2 bg-blue-300'>
              {item.box_number}
              <span className='mr-2'></span>
              {item.input}
              <button
                className='bg-red-700'
                onClick={() => remove(index)} // Pass the index of the item to remove
              >
                &#10007;
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
