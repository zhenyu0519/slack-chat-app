import { combineReducers } from "redux";
import userReducer from "./user/userReducers";
import channelReducer from "./channel/channelReducers";
const rootReducer = combineReducers({
  user: userReducer,
  channel: channelReducer,
});

export default rootReducer;
