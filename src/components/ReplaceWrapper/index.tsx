import { FC } from "react";
import { IReplaceWrapperProps } from "./types";

export const ReplaceWrapper: FC<IReplaceWrapperProps> = ({ children }) => {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{ height: "calc(100vh - 224px)" }}
    >
      {children}
    </div>
  );
};
