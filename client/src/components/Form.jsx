import React, { useState } from "react";
import  '../../style.css'

const Form = (props) => {
  const [data, setData] = useState({
    name: "",
    prompt: "",
  });

  const SubmitMyData = (e) =>{
        e.preventDefault();
        props.SubmitData(data);
  }

  

  const [generate, setGenerate] = useState(true);

  return (
      <form
        method="post"
        onSubmit={SubmitMyData}
        className="bg-white sm:px-[60px] px-[30px] sm:mr-10 mb-10 rounded-xl sm:py-20 py-10"
      >
        {/* <div className="my-2">
          <label htmlFor="name" className="text-[16px] mr-4 ">
            Name
          </label>
          <input
            type="text"
            name=""
            id="name"
            value={data.name}
            onChange={(e) => {
              setData({ name: e.target.value, prompt: data.prompt });
            }}
            className="px-4 text-center py-2 rounded-md bg-gray-100 "
            placeholder="Enter your name"
          />
        </div> */}
        <div className="my-2 ">
          <label htmlFor="prompt" className="text-[16px] mr-4 sm:mb-0  ">
            Your Query
          </label>
          <input
            type="text"
            name=""
            id="prompt"
            value={data.prompt}
            onChange={(e) => {
              setData({ name: data.name, prompt: e.target.value });
            }}
            required
            className="px-4 sm:w-[400px] w-full text-center  py-4 rounded-md bg-gray-100 outline-none "
            placeholder={`${props.placeholder}`}
          />
        </div>
        <button
          type="submit"
          className="  px-3 py-2 rounded  bg-pinkOrange text-white mt-4">
          {generate ? "Generate" : "Generating....."}
        </button>
      </form>
  );
};

export default Form;
