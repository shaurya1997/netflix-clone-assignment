"use client";
import { jsonMoviesData } from "@/Utils/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Link from "next/link";
import ReactPlayer from "react-player";
import { IoIosVolumeOff } from "react-icons/io";
import { CiVolumeHigh } from "react-icons/ci";
interface Props {
  setShowModal: (value: boolean) => void;
  showModal: boolean;
}
function Banner({ setShowModal, showModal }: Props) {
  interface Movie {
    id: number;
    name: string;
    time: string;
    type: string;
    description: string;
    img: string;
  }
  const [movie, setMovie] = useState<Movie>();
  const [muted, setMuted] = useState<boolean>(true);
  useEffect(() => {
    setMovie(jsonMoviesData[Math.floor(Math.random() * jsonMoviesData.length)]);
  }, []);

  return (
    <>
      <div className="absolute top-10 left-0 -z-10 w-screen h-[70vh] lg:h-[70vh] md:h-[60vh] sm:h-[30vh]">
        {showModal && movie && (
          <img src={movie.img} alt="banner" width="100%" height={700} />
        )}
        {!showModal && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=32RAq6JzY-w&t=3s"
            playing
            muted={muted}
            width="100%"
            className="h-[70vh] lg:h-[70vh] md:h-[60vh] sm:h-[30vh]"
          />
        )}
      </div>
      <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:justify-end lg:pb-12">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl text-[#e5e5e5]  ml-10">
          {movie?.name}
        </h1>
        <p className="max-w-xs text-xs ml-10 text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-white">
          {movie?.description}
        </p>
        <div className="flex space-x-3 ml-10 justify-between">
          <div className="flex gap-4">
            <Link href="/watch">
              <button className="bg-white text-black flex justify-center items-center py-2 px-4 rounded gap-0.5">
                <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
              </button>
            </Link>
            <button
              className="bg-[gray]/70 flex justify-center items-center py-2 px-4 rounded gap-0.5"
              onClick={() => setShowModal(true)}
            >
              More Info{" "}
              <IoIosInformationCircleOutline className="h-5 w-5 md:h-8 md:w-8" />
            </button>
          </div>
          <button onClick={() => setMuted(!muted)}>
            {muted ? (
              <IoIosVolumeOff className="h-6 w-6 text-white mr-16" />
            ) : (
              <CiVolumeHigh className="h-6 w-6 text-white mr-16" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
