import { Box } from "@mui/material";
import MuiModal from "@mui/material/Modal";
import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { FaCheck, FaRegThumbsUp, FaPlus, FaPlay } from "react-icons/fa";
import { IoIosVolumeOff } from "react-icons/io";
import { CiVolumeHigh } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import Link from "next/link";

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
function Modal({ showModal, setShowModal }: Props) {
  const handleClose = () => {
    setShowModal(false);
  };
  const [muted, setMuted] = useState(true);
  const [addedToList, SetAddedToList] = useState(false);

  const handleList = () => {
    SetAddedToList(!addedToList);
  };
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "grey",
          border: "1px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <div className="flex justify-end cursor-pointer" onClick={handleClose}>
          <IoCloseCircle className="h-10 w-10" />
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=32RAq6JzY-w"
          playing
          muted={muted}
          width={700}
          height={400}
        />
        <div className="mt-2 flex w-full items-center justify-between px-10">
          <div className="flex space-x-2">
          <Link href="/watch">
            <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]" >
              <FaPlay className="h-6 w-6 text-black" />
              Play
            </button>
            </Link>

            <button className="modalButton" onClick={handleList}>
              {addedToList ? (
                <FaCheck className="h-7 w-7" />
              ) : (
                <FaPlus className="h-7 w-7" />
              )}
            </button>

            <button className="modalButton">
              <FaRegThumbsUp className="h-7 w-7" />
            </button>
          </div>
          <button className="modalButton" onClick={() => setMuted(!muted)}>
            {muted ? (
              <IoIosVolumeOff className="h-6 w-6" />
            ) : (
              <CiVolumeHigh className="h-6 w-6" />
            )}
          </button>
        </div>
        <div>
          <div className="text-white ml-4 mt-5">
            Watch in Tamil,Telugu,English
          </div>
          <div className="flex gap-20">
            <div className="text-white text-xs ml-4 mt-1 w-6/12">
              After a deadly gas leak from a factory in Bhopal,brave railway
              workers risk their lives to save others in the face of unspeakable
              disaster
            </div>
            <div className="w-6/12 text-white text-xs">
              cast: R.Madhavan, kay kay Menon
            </div>
          </div>
        </div>
      </Box>
    </MuiModal>
  );
}

export default Modal;
