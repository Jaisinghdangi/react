import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST,ADD_TO_WISHLIST  } from "../ActionTypes";

const reducers =(state=[],action)=>{
switch(action.type){
    case ADD_TO_CART:
        return [...state,action.payload];
     case REMOVE_FROM_CART:
        const deletetedArray1=state.filter((item,index)=>{
            return index !=action.payload;
        });
        return deletetedArray1;

       
        
        default:
            return state;
}

};
 export default reducers;