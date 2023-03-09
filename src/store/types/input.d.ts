export enum InputActionTypes {
  SET_STRING = "SET_STRING",
}

export interface InputState {
  inputString: string;
}

export interface ISetStringAction {
  type: InputActionTypes.SET_STRING;
  payload: string;
}
