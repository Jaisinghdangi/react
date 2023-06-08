import {REMOVE_FROM_WISHLIST,ADD_TO_WISHLIST  } from "../ActionTypes";

const reducers2=(state=[],action)=>{
switch(action.type){
        case ADD_TO_WISHLIST:
        return [...state,action.payload];
         
        case REMOVE_FROM_WISHLIST:
        const deletetedArray2=state.filter((item,index)=>{
            return index !=action.payload;
        });
        return deletetedArray2;
        
        default:
            return state;
}

};
 export default reducers2;