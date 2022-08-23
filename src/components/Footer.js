import { useDispatch, useSelector } from 'react-redux';
import {colorChanged, statusChange} from "../redux/filters/actions"


//koyta task imcompleate seta dynamic vabe dekhano holo
const numberOfTodos = (number_of_todos) =>{
    switch (number_of_todos) {
        case 0:
            
          return "No task left";

        case 1:
            return "1 task left"
    
        default:
         return `${number_of_todos} tasks`
    }

}

export default function Footer() {

    // koyta task incompleate ace seta ber korbo
    const todos = useSelector((state)=> state.todos);
   // !todo.compleate = jeta incompleate
    const todosRemaining = todos.filter(todo => !todo.completed).length;
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    
    const { status, colors} = filters;
    
    const handleStatusChange = ( status) =>{
        dispatch(statusChange(status))
    };

    const handleColorChanged = ( color, changeType) =>{
        if(colors.includes(color)){
            dispatch(colorChanged(color, 'removed'))
        }
        else{
            dispatch(colorChanged(color, "added"))
        }
      
    }


  return (
    <div>
         <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <p>{numberOfTodos(todosRemaining)} </p>
                    <ul className="flex space-x-1 items-center text-xs">
                        <li className={`cursor-pointer ${status === 'All' && 'font-bold'}`} onClick={() => handleStatusChange("All")}>All</li>
                        <li>|</li>
                        <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`} onClick={() => handleStatusChange("Incomplete")}>Incomplete</li>
                        <li>|</li>
                        <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`} onClick={() => handleStatusChange("Complete")}>Complete</li>
                        <li></li>
                        <li></li>
                        <li
                            className={`h-3 w-3 border-2 border-green-500 
                            md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && 'bg-green-500'}`}                  
                            onClick={() => handleColorChanged('green')} ></li>
                        <li
                            className={`h-3 w-3 border-2 border-red-500
                             md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && 'bg-red-500'}`}
                            onClick={() => handleColorChanged('red')}></li>
                        <li
                            className={`h-3 w-3 border-2 border-yellow-500 
                            md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && 'bg-yellow-500'}`}
                            onClick={() => handleColorChanged('yellow')} ></li>
                    </ul>
                </div>
    </div>
  )
}
