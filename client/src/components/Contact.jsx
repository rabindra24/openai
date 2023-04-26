import React, { useState } from "react";
import axios from "axios";
import Form  from "./Form";

const Contact = () => {
  const [answer,setAnswer] = useState("Creativity is not a talent, it's a mindset");

  const [image, setImage] = useState("");
  const [generate, setGenerate] = useState(true);

  const SubmitData = async (data) => {

    setGenerate(false);
    
    try {

      await axios.post("http://localhost:3000/image", data).then((res) => {
        setImage(res.data);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }finally{
      setGenerate(true);
    }

   
  };

  return (
    <div className="w-full flex flex-col gradient h-[100vh]">
      
      <h4 className="mt-10 text-white text-center text-[20px] font-semibold ">
        {answer ? "Creativity is not a talent, it's a mindset" : "Generating......"}
      </h4>
      <div className="gradient h-[100%] width-full flex sm:flex-row flex-col justify-center items-center sm:p-10 px-5">
        {/* <form
          method="post"
          onSubmit={SubmitData}
          className="bg-white px-[100px] sm:mr-10 mb-10 rounded-xl py-10"
        >
          <div className="my-2">
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
          </div>
          <div className="my-2 w-full">
            <label htmlFor="prompt" className="text-[16px] mr-4 ">
              Prompt
            </label>
            <input
              type="text"
              name=""
              id="prompt"
              value={data.prompt}
              onChange={(e) => {
                setData({ name: data.name, prompt: e.target.value });
              }}
              className="px-4 text-center py-2 rounded-md bg-gray-100 "
              placeholder="Enter what you want to create"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-300 text-white px-3 py-2 rounded
             mt-4"
          >
            {generate ? "Generate" : "Generating....."}
          </button>
        </form> */}
        <Form SubmitData={SubmitData} placeholder="Example: panda riding car"/>
        <img
          src={image}
          alt="Image will we shown here"
          className="w-[500px] h-auto mx-auto text-white"
        />
      </div>
    </div>
  );
};

export default Contact;
