import { userActionTypes } from "./userTypes";

export const setUser = (user) => ({
  type: userActionTypes.SET_USER,
  payload: { currentUser: user },
});
