import initialState from "../todos/initialState";
import { ADDDED, ALLCOMPLEATED, CLEARCOMPLEATED, COLORSELECTED, DELETED, TOGGOLED } from "./actionTypes";



const nextTodoId = (todos) => {// loop kore highest id ber kore tar sathe 1 jog korbo.
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;

    // kono array k opperation caliye singe value te ante hole reduce bebohar korte hobe.
    // reduce er moddhe 1ti function dite hobe
    //const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    //     parameter maxId = j result amra pabo
    //     parameter todo = j j element gulo amra current element hisabe pabo. protibar akta kore todo pabo
    
    // Math.max(todo.id, maxId), -1)
    // Math.max = 2ti number er modddhe borojonk return kore.
    // parameter todo.id = jeta current element a peyeci
    // parameter maxId = last result er sathe compare kore. lergest value return korebe.

}

const reducer = (state = initialState, action) =>{
    switch (action.type) {

        case ADDDED:  // todo add hobe. tai updated state retirn korte hobe. main state k change kora jabe na
           return[     //notun array return korci
            ...state,  //copy korlam. sob to do cole aslo
              {
                id : nextTodoId(state), //notun id dite hobe. todo array te last id er stahe 1 jog kora lagbe. id ta banannonr jonno notun function banate hobe.
                text : action.payload,    // parameter er state tai puro array
                completed : false,
            
            }                      
           ]

           
           case TOGGOLED: // completed true hole false korbo ,, incompleate false thakle tru korbo

           return state.map(todo => {
            if (todo.id !== action.payload) { //id 2ta match na korle todo object retuern korbo
                return todo;
            };


            // id 2ti soman na hole, completed property k toggole kore dibo
             return{
                ...todo,
                completed : !todo.completed  // completeted property k toggole kore dibo.
             }
       });

          case COLORSELECTED:
            const {todoId, color} = action.payload; // actions theke ber kore niye aslam
            return state.map((todo) =>{
                if(todo.id !== todoId ){
                    return todo;
                }

                // id 2ti match hoye gele color property chenge kora lagbe
                return{
                    ...todo, // immutably copy korlam
                    color : color,
                };
            });

            case DELETED: // sate.filter 1ti notun array return kore
                return state.filter(todo => todo.id !== action.payload);

            case ALLCOMPLEATED: //sobaik completae kore dibo/ tik mark dibo sobaik
                return state.map(todo =>{
                    return{
                        ...todo,
                        completed: true
                    };
                });
            
            case CLEARCOMPLEATED: // jara completate hoye gece tader bad dibo. jara compleate hoy nai tader filter korbo
                return state.filter(todo => !todo.completed)


    
            default:
                return state;
    }
};

export default reducer;