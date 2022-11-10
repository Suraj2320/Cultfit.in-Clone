import {
    combineReducers,
    legacy_createStore,
    applyMiddleware,
    compose
  } from "redux";
  import thunk from "redux-thunk";
  import { authReducer } from "./auth/auth.reducer";
import { registerReducer } from "./register/register.reducer";
 
  
  const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer
   
  });
  
  const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
  
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
  