import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="   h-[90vh] bg-black text-white flex flex-col  items-center justify-center pb-20 ">
      <div className="flex  rounded-3xl font-bold justify-center items-center gap-2 py-1 px-3 bg-gray-800 text-orange-500  ">
        Sort Your Notes Easily <FaRegEdit />
      </div>
      <div className="text-5xl py-5 font-bold">
        Create Notes <span className="text-orange-500">With Easily!</span>{" "}
      </div>
      <p className="text-lg py-5">
        Streamline Your Workflow with Effortless Note Creation - Elevate <br />
        Productivity, Stay Organized, and Focus on What Matters Most.
      </p>
      <Link
        href={"/dashboard"}
        className="w-40 bg-orange-500 px-8 py-2 rounded-xl text-white text-center"
      >
        Get Started
      </Link>
      <div className="flex justify-center items-center gap-5 py-3">
        <VscGithub className="size-7" />
        <CiLinkedin className="size-7" />
      </div>
    </div>
  );
}
