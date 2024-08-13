import { CiLinkedin } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="   h-[90vh] bg-black text-white   flex flex-col  items-center justify-center pb-20 ">
      <div className="flex  rounded-3xl font-bold justify-center items-center gap-2 py-1 px-3 bg-gray-800 text-orange-500  ">
        Sort Your Notes Easily <FaRegEdit />
      </div>
      <h1>Create Notes With Ease!</h1>
      <p>
        Streamline Your Workflow with Effortless Note Creation - Elevate
        Productivity, Stay Organized, and Focus on What Matters Most.
      </p>
      <button className="w-40">Get Started</button>
      <div className="flex">
        <VscGithub />
        <CiLinkedin />
      </div>
    </div>
  );
}
