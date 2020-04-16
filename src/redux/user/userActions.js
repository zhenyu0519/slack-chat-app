import { userActionTypes } from "./userTypes";

export const setUser = (user) => {
  return {
    type: userActionTypes.SET_USER,
    payload: user,
  };
};

export const clearUser = () => ({
  type: userActionTypes.CLEAR_USER,
});
