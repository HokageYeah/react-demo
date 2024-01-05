import { createStore, combineReducers,applyMiddleware } from "redux";
import countReducer from "./home/reducer";
// 调用异步action的中间件
import thunk from "redux-thunk";
// 传统的
// export default createStore(countReducer);
export default createStore(combineReducers({
    home: countReducer
}), applyMiddleware(thunk))
