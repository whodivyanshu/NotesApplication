import React, { FC, useState } from "react";
import Create from "./Create";

export interface props {
  setComponentFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notes: FC<props> = ({ setComponentFunction }) => {
  return (
    <div className="  w-full  rounded-3xl p-5 ">
      <div className="h-[20%]  w-full flex justify-between">
        <div className="text-4xl text-white w-1/2  font-light">
          Your Notes{" "}
          <span className="text-white text-sm">
            {" "}
            <br />
            Here You can see and create notes
          </span>
        </div>

        <button
          onClick={() => setComponentFunction(true)}
          className="text-white bg-orange-500 border-black py-2 px-4 rounded h-10"
        >
          create new note!
        </button>
      </div>
      <div className="h-[80%]  border border-dotted rounded-3xl"></div>
    </div>
  );
};

export default Notes;
