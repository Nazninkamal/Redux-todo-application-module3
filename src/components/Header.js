import React, { useState } from 'react';
import noteImage from "../assests/images/notes.png";
import tickImage from "../assests/images/double-tick.png";
import plusImage from "../assests/images/plus.png";
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted} from '../redux/todos/actions';
                            
// ui te component breackdown korbo. jekhane jekhane state theke data ane dekhate hobe sekhane useSelector bebohar korbo
// component theke action dispatch korte hole useDispatch () nibo


// jeta puro application er busness logic k hold kore rakhe takei redux rakha dorkar
// local state  gulok redux a rakha dorkar nai. ja sudu 1ti compo tei use hoy ,take react diya kore felai better
//react er form handelong 2 vabe kora jay. controlled way and uncontrolled way
// controlled way = jar controlled react er hate ace(useState = functional compo, setState = class compo)
//uncontroled way = normal defult html er from control


export default function Header() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

   const handleInput = (e) =>{
     setInput(e.target.value);
   };

   const submitHandler = (e) =>{
     e.preventDefault();
     dispatch(added(input));
     setInput("");
   };

  const compleateHandler = () => {
    dispatch(allCompleted())
  };

  const clearHandler = () => {
    dispatch(clearCompleted())
  };


  return (
    <div>
    <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
         onSubmit={submitHandler}>
        <img
            src= {noteImage}
            className="w-6 h-6"
            alt="Add todo"
        />
        <input
            type="text"
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            value={input}
            onChange={handleInput}
        />
        <button
            type="submit" className ={`appearance-none w-8 h-8 bg-[url('${plusImage}')]
             bg-no-repeat bg-contain`}
        ></button>
    </form>

    <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer"
        onClick={compleateHandler}>
            <img
                className="w-4 h-4"
                src={tickImage}
                alt="Complete"
            />
            <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>Clear completed</li>
    </ul>
</div>
  )
}
