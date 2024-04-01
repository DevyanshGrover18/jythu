import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="main w-full  md:mx-auto lg:w-[30vw] bg-zinc-200 rounded-xl m-2 p-4">
        <img src={props.img} alt="" className="m-auto"/>
        <div className="flex-wrap text-center p-4">
          <h1 className="text-2xl font-bold">{props.service}</h1>
          <p>
          {props.desc}
          </p>
          <span className="material-symbols-outlined m-4 bg-gradient-to-r from-[#129c8d] to-[#4eee8b] rounded-full p-2 text-white">arrow_forward</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
