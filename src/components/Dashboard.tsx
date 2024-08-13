"use client";
import React, { useState } from "react";
import One from "./One";
import Two from "./Two";

const Dashboard = () => {
  const [component, setComponent] = useState(true);
  return (
    <div className="h-[90vh] bg-black w-full pt-20">
      <div className="w-[60%] bg-green-400 h-[80%] mx-auto flex ">
        <div className="flex flex-col w-1/5 bg-yellow-300 h-full py-10 gap-5">
          <button
            onClick={() => setComponent(true)}
            className="border p-2 border-black"
          >
            Home
          </button>
          <button
            onClick={() => setComponent(false)}
            className="border p-2 border-black"
          >
            Settings
          </button>
        </div>
        <div className="w-4/5">{component === true ? <One /> : <Two />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
