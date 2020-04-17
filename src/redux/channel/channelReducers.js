import { channelActionTypes } from "./channelTypes";

const INIT_STATE = {
  currentChannel: null,
};

const channelReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case channelActionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload,
      };

    default:
      return state;
  }
};

export default channelReducer;
