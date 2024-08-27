import { tasks } from "../assets/data";
import { getStageColor } from "../utils";
import moment from "moment";

import { Delete, Restore } from "@mui/icons-material";

export default function Trash() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className=" text-xl">Trashed Tasks</div>
        <div className="flex gap-2">
          {/* restore */}
          <div className="relative flex gap-2 text-[var(--text)]">
            <Restore fontSize="inherit" className="absolute left-2 bottom-2" />
            <button className="  pl-8 pr-4 rounded-md py-1">Restore All</button>
          </div>
          {/* delete all */}
          <div className="relative flex gap-2 text-white">
            <Delete fontSize="inherit" className="absolute left-2 bottom-2" />
            <button className=" bg-[var(--tertiary)] pl-8 pr-4 rounded-md py-1">
              Delete All
            </button>
          </div>
        </div>
      </div>

      {/* trashed tasks table */}
      <div className="p-4 bg-white rounded-md">
        <div className=" h-fit overflow-auto whitespace-pre-line">
          <div className="   grid grid-cols-[auto,auto,auto,auto,auto]">
            {/* header */}
            <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
              Task Title
            </div>
            <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
              Priority
            </div>
            <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
              Stage
            </div>
            <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
              Modified On
            </div>
            <div className="px-2 py-4 border-b border-[var(--neutral)]"></div>

            {/* body */}
            {tasks.map((task) => (
              // row
              <>
                {/* className="  gap-2 py-4  border-b border-[var(--neutral)]" */}
                {/* task title */}
                <div className="flex px-2 gap-2 items-center py-4  border-b border-[var(--neutral)]">
                  <div
                    style={{ backgroundColor: getStageColor(task.stage) }}
                    className={`h-2 w-2 lg:h-4 lg:w-4 rounded-full`}
                  ></div>
                  <div>{task.title}</div>
                </div>

                {/* priority */}
                <div className="py-4 px-2  border-b border-[var(--neutral)]">
                  {task.priority}
                </div>

                {/* stage */}
                <div className="relative flex px-2 items-center gap-1 py-4  border-b border-[var(--neutral)]">
                  {task.stage}
                </div>

                {/* modified on */}
                <div className=" py-4 px-2  border-b border-[var(--neutral)]">
                  {moment(task.updatedAt).format("ddd MMM DD YYYY")}
                </div>

                {/* buttons */}
                <div className="flex items-center gap-2 px-2 py-2  border-b border-[var(--neutral)]">
                  <Restore className=" text-gray-400" />
                  <Delete style={{ color: "#BC6C25" }} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
