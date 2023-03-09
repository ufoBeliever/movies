import {
  InputActionTypes,
  InputState,
  ISetStringAction,
} from "../types/input.d";

const initialState: InputState = {
  inputString: "",
};

export const inputReducer = (
  state = initialState,
  action: ISetStringAction
): InputState => {
  switch (action.type) {
    case InputActionTypes.SET_STRING:
      return { inputString: action.payload };
    default:
      return state;
  }
};
