"use client";
import React, { useState } from "react";
import Settings from "./Settings";
import Notes from "./Notes";
import Create from "./Create";
import { FiHome } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const Dashboard = () => {
  const [component, setComponent] = useState(true);
  const [create, setCreate] = useState(false);
  console.log(create, "create");
  return (
    <div className="h-[90vh] bg-black w-full pt-10">
      <div className="w-[80%] bg-black h-[80%] mx-auto flex gap-10 ">
        <div className="flex flex-col w-1/5  h-full py-1 gap-5">
          <button
            onClick={() => setComponent(true)}
            className="hover:bg-slate-600 p-2 rounded-xl bg-black text-white flex justify-center items-center gap-2"
          >
            <FiHome />
            Home
          </button>
          <button
            onClick={() => setComponent(false)}
            className="hover:bg-slate-600 p-2 rounded-xl bg-black text-white flex justify-center items-center gap-2"
          >
            <IoSettingsOutline />
            Settings
          </button>
        </div>
        <div className="w-4/5  flex ">
          {component === true ? (
            create ? (
              <Create setComponentFunction={setCreate} />
            ) : (
              <Notes setComponentFunction={setCreate} />
            )
          ) : (
            <Settings />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
