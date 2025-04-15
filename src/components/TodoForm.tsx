import TailButton from "../ui/TailButton" 
import { useRef } from "react"
export default function TodoForm({addTodo}) {
  const selRef = useRef() ;
  const inRef = useRef() ;

  const handleClick = (e) => {
    e.preventDefault() ;

    if (inRef.current.value == "" ) {
      alert("값을 입력하세요.");
      inRef.current.focus() ;
      return ;
    }

    addTodo(inRef.current.value, selRef.current.value) ;
  }

  const handleCancel = (e) => {
     inRef.current.value = "";
     inRef.current.focus() ;
     selRef.current.value = "X" ;
  }

  return (
    <form className="w-10/12 grid grid-cols-5 gap-4">
      <select id="sel1"  
        ref = {selRef}
        className="bg-gray-50 border border-gray-300
                               text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 
                                block w-full p-2 m-2">
        <option value="X">X</option> 
        <option value="O">O</option> 
      </select>
      <div className="col-span-2 h-full">
        <input type="text" id="txt1" 
          ref ={inRef}
          className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full  
                         p-2 m-2"/>
      </div>
      <TailButton caption="확인"
        color="blue"
        onClick={handleClick} />
      <TailButton caption="취소"
        color="orange"
        onClick={handleCancel} />
    </form>
  )
}
