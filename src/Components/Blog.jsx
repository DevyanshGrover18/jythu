import React from "react";

const Blog = (props) => {
  return (
    <div>
      <div className="main sm:flex gap-8">
        <div className="img hidden sm:block w-auto">
          <img src={props.img} alt="" className="flex items-center h-[10rem] w-[16rem]" />
        </div>
        <div className="border-2 rounded-xl w-full sm:w-auto p-2">
          <div className="flex justify-between">
            <div className="bg-gradient-to-r from-[#129c8d] to-[#4eee8b] rounded px-2 text-white">{props.area}</div>
            March 7 ,2024
          </div>
          <h1 className="text-3xl font-bold">{props.head}</h1>
          <p className="invisible lg:visible">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
