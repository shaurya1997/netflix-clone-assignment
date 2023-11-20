"use client";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

const Watch = () => {
  useEffect(() => {
    const player = document.getElementById("player");
    if (player) player.style.height = "100vh";
  }, []);

  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=32RAq6JzY-w"
        playing
        controls={true}
        width="100%"
        id="player"
        className="absolute"
      />
      <Link href="/">
        <div className="absolute text-white ml-4 mt-16 z-10 cursor-pointer hover:bg-grey-700">
          <IoMdArrowBack className="h-7 w-7" />
        </div>
      </Link>
    </div>
  );
};
export default Watch;
