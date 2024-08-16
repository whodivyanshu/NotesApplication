import React, { FC } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { props } from "./Notes";

const Create: FC<props> = ({ setComponentFunction }) => {
  return (
    <div className="flex bg-slate-800 h-[90%] w-[80%] m-auto justify-between p-5">
      <div className="text-white text-3xl">
        {" "}
        New Note <br />
        <span className="text-sm">Right here now you can create new note</span>
      </div>
      <div>
        <button
          onClick={() => setComponentFunction(false)}
          className="pl-[200px]"
        >
          <IoCloseSharp size={30} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Create;
