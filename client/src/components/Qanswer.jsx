import React,{useState} from 'react'
import Form from './Form'
import axios from 'axios'; 

const Qanswer = () => {
    const [answer,setAnswer] = useState("Answer will be shown here");
    const [generating, setGenerating] = useState(false);
    const SubmitData = async (data) => {
        setGenerating(true)
        try {
          await axios.post("http://localhost:3000/qanswer", data).then((res) => {
            setAnswer(res.data);
          });
        } catch (error) {
          console.log(error);
        }finally{
            setGenerating(false);
        }
       
      };


  return (
    <div className='flex flex-col items-center justify-center sm:m-0  gradient2 h-[100vh] sm:px-10 px-5'>
        <h3 className={`${generating && 'text-center w-full  text-white font-semibold text-[23px] py-3'}`}>{generating && "Generating......."}</h3>
      <div className=' p-5 text-white text-center w-full'>{answer}</div>
      <Form SubmitData={SubmitData} placeholder="Your Question"/>
    </div>
  )
}

export default Qanswer
