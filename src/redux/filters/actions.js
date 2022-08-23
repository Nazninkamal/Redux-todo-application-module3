import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"



//color select and toggoled
export const colorChanged = (color, changeType) =>{
  return{
    type : COLORCHANGED,
    payload: {
        //color : color,
        //change : change  // nam and property same hole nicer moto kore lekha jay
        color,
        changeType
    }
  };
};

//filter value

export const statusChange = (status) =>{
    return{
        type : STATUSCHANGED,
        payload : status
    }
}