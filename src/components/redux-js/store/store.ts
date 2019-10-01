import { createStore } from "redux";
import reducer from "../reducers/reducer";

// const reducer = (state: State = defaultState, action: {}) => {
//   return state;
// };
const store = createStore(reducer);
export default store;
