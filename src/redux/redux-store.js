import {combineReducers} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const {createStore} = require("redux");

let store =createStore();
let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
      sidebar:sidebarReducer
    })
export default store;