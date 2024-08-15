"use client";
import React, { useState } from "react";
import Settings from "./Settings";
import Notes from "./Notes";
import Create from "./Create";

const Dashboard = () => {
  const [component, setComponent] = useState(true);
  const [create, setCreate] = useState(false);
  console.log(create, "create");
  return (
    <div className="h-[90vh] bg-black w-full pt-20">
      <div className="w-[60%] bg-black h-[80%] mx-auto flex ">
        <div className="flex flex-col w-1/5 bg-black h-full py-10 gap-5">
          <button
            onClick={() => setComponent(true)}
            className="border p-2 bg-slate-700 text-white"
          >
            Home
          </button>
          <button
            onClick={() => setComponent(false)}
            className="border p-2 bg-slate-700 text-white"
          >
            Settings
          </button>
        </div>
        <div className="w-4/5">
          {component === true ? (
            create ? (
              <Create />
            ) : (
              <Notes setCreateFunction={setCreate} />
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
