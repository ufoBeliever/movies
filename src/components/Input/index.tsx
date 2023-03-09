import { useAppDispatch } from "@/hooks/useAppDispatch";
import { InputActionTypes } from "@/store/types/input.d";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Input = () => {
  const [inputState, setInputState] = useState<string>("");
  const dispatch = useAppDispatch();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: InputActionTypes.SET_STRING, payload: inputState });
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  return (
    <form
      className="flex items-center gap-2 w-full lg:w-1/2"
      onSubmit={submitHandler}
    >
      <input
        className="w-full h-16 border-2 border-gray-400 focus:border-black rounded-xl text-2xl px-6"
        value={inputState}
        onChange={inputHandler}
      />
      <button type="submit" className="w-10 h-10">
        <AiOutlineSearch size="40px" />
      </button>
    </form>
  );
};
