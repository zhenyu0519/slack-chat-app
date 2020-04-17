import { channelActionTypes } from "./channelTypes";

export const setCurrentChannel = (channel) => ({
  type: channelActionTypes.SET_CURRENT_CHANNEL,
  payload: channel,
});
