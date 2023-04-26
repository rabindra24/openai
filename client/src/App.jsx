import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="w-[100%] h-[100vh] bg-white p-2">
      <div className="bg-gray-200 py-3 mb-2">
        <h2 className="text-center text-[1.3rem] font-semibold text-gray-700">
          Let's Play With AI
        </h2>
      </div>
      <div className="bg-gray-100 py-3 grid sm:grid-cols-2 px-3 gap-5">
        <Link to="/qanswer">
          <div className="flex flex-row items-center bg-white py-2 px-3 rounded-md mb-4">
            <div className="bg-[#F05358] flex items-center justify-center min-w-[70px] h-[70px] rounded-md">
              <i class="bi bi-question-circle-fill text-white sm:text-[2rem] text-[1.3rem]"></i>
            </div>
            <div className="flex flex-col   p-3 rounded">
              <p className="font-semibold sm:text-[20px]">Q and A</p>
              <p className="sm:text-[15px] text-[1rem]">Answer questions based on existing knowledge.</p>
            </div>
          </div>
        </Link>

        <Link to="/contact">
          <div className="flex flex-row items-center bg-white px-3 py-2 rounded-md mb-4">
            <div className="bg-[#8653E0] flex items-center justify-center min-w-[70px] h-[70px] rounded-md">
              <i class="bi bi-image text-white text-[2rem]"></i>
            </div>
            <div className="flex flex-col   p-3 rounded">
              <p className="font-semibold text-[20px]">Image Generation</p>
              <p>Create any image by your creativity.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
