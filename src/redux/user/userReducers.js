import { userActionTypes } from "./userTypes";

const INITITAL_STATE = {
  currentUser: null,
  isLoading: true,
};

const userReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    case userActionTypes.CLEAR_USER:
      return {
        ...INITITAL_STATE,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
