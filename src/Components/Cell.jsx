import React from 'react';

const Cell = (props) => {
  return (
    <div>
      <div className="main bg-gradient-to-r from-[#129c8d] to-[#4eee8b] w-[30vw] h-80 sm:h-96 sm:w-[20vw] rounded-full mx-auto">
        <img src={props.img} alt="" className='mx-auto my-8'/>
        <div className='text-center m-4'>
            <h1 className='text-white font-bold text-2xl'>{props.name}</h1>
            <h1 className='text-white text-lg'>{props.prof}</h1>
        </div>
      </div>
    </div>
  );
}

export default Cell;
