import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux';




export default function TodoList() {
   const todos = useSelector((state) => state.todos);
   const filters = useSelector(state => state.filters);

   const filterByStatus = todo => { // filter by status
    const {status} = filters;
    switch (status) {
      case 'Complete': 
       return todo.completed;
  
  
       case 'Incomplete':
        return !todo.completed; //compleate na
    
      default:
       return true;
    }
  };
  
  const filterByColors = todo =>{
    const {colors} = filters;
  
    if(colors.length > 0){
       return colors.includes(todo?.color);
    }
    return true;
   };
  
   return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
      .filter (filterByStatus)

// filter by color
     .filter(filterByColors)

      .map((todo) => (
         <Todo todo = {todo} key={todo.id}/>
      ) )}
    </div>
  )
}
