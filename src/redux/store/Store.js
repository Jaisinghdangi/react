 import { createStore } from "redux";
import reducers from "../reducers/reducers";
import reducers2 from "../reducers/reducers2";
import Addreducers from "../reducers/addressreducers";
import { combineReducers } from "redux";
const routeReducers=combineReducers({reducers, reducers2, Addreducers})
 const store =createStore(routeReducers);
 export default store;