import { legacy_createStore as  createStore } from "redux";
import CounterReducer from "./reducers/CountReducers";

const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store=createStore(CounterReducer,enhancer())

export default store