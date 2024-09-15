import { Board } from "@prisma/client";
import { BoardtitleForm } from "./board-title-form";
import { BoardOptions } from "./board-options";

interface BoardNavbarProps {
  data: Board;
}

export const BoardNavbar = ({ data }: BoardNavbarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-2 text-white">
      <BoardtitleForm data={data} />
      <div className="ml-auto">
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};
