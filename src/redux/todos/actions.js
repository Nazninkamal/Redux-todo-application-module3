import { ADDDED, ALLCOMPLEATED, CLEARCOMPLEATED, COLORSELECTED, DELETED, TOGGOLED } from "./actionTypes"


export const added = (todoText) =>{
    return{
        type: ADDDED,
        payload : todoText
    };

};

export const toggoled = (todoId) =>{
    return{
          type: TOGGOLED,
          payload : todoId
    };
};

export const colorselected = (todoId, color) =>{
    return{
          type: COLORSELECTED,
          payload :{
            todoId,
            color,
          },
    };
};

export const deleted = (todoId) =>{
    return{
          type: DELETED,
          payload :todoId
    };
};

export const allCompleted = () =>{
    return{
          type: ALLCOMPLEATED  
    };
};

export const clearCompleted = () =>{
    return{
          type: CLEARCOMPLEATED
    };
};