import { ADD_ADDRESS, DELETE_ADDRESS  } from "../ActionTypes";

const Addreducers =(state=[],action)=>{
switch(action.type){
    case ADD_ADDRESS:
        return [...state,action.payload];
     case DELETE_ADDRESS:
        const deletetedArray1=state.filter((item,index)=>{
            return index !=action.payload;
        });
        return deletetedArray1;

       
        
        default:
            return state;
}

};
 export default Addreducers;