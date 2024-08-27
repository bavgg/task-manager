import { Add, AttachFile, List, Message } from "@mui/icons-material";
import { tasks } from "../assets/data";
import { getStageColor, getInitialColor, getInitials } from "../utils";
import moment from "moment";

export default function Tasks() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className=" text-xl">Tasks</div>
        <div className="relative flex gap-2 text-white">
          <Add fontSize="inherit" className="absolute left-2 bottom-2" />
          <button className=" bg-[var(--secondary)] pl-8 pr-4 rounded-md py-1">
            Create Task
          </button>
        </div>
      </div>

      {/* task table */}
      <div className="p-4 bg-white rounded-md">
        {/* <div className="grid grid-cols-[auto,auto,auto,auto,auto,auto] font-[500] gap-2 mb-2">
          
        </div> */}

        <div className=" h-fit overflow-auto whitespace-pre-line">
          <div className="text-sm  lg:text-lg grid grid-cols-[auto,auto,auto,auto,auto,auto]">
            <div className="px-2 py-4 border-b border-[var(--neutral)]">
              Task Title
            </div>
            <div className="px-2 py-4 border-b border-[var(--neutral)]">
              Priority
            </div>
            <div className="px-2 py-4 border-b border-[var(--neutral)]">
              Ceated At
            </div>
            <div className="px-2 py-4 border-b border-[var(--neutral)]">
              Assets
            </div>
            <div className="px-2 py-4 border-b border-[var(--neutral)]">
              Team
            </div>
            <div className="px-2 py-4 border-b border-[var(--neutral)]"></div>
            {tasks.map((task) => (
              // row
              <>
                {/* className="  gap-2 py-4  border-b border-[var(--neutral)]" */}
                {/* task title */}
                <div className="flex px-2 gap-2 items-center py-4  border-b border-[var(--neutral)]">
                  <div
                    style={{ backgroundColor: getStageColor(task.stage) }}
                    className={`h-2 w-2 lg:h-2 lg:w-2 rounded-full`}
                  ></div>
                  <div>{task.title}</div>
                </div>

                {/* priority */}
                <div className="py-4 px-2  border-b border-[var(--neutral)]">
                  {task.priority}
                </div>

                {/* created at */}
                <div className=" py-4 px-2  border-b border-[var(--neutral)]">
                  {moment(task.createdAt).format("D-MMM-YYYY")}
                </div>

                {/* assets */}
                <div className="flex px-2 gap-1 items-center py-4  border-b border-[var(--neutral)]">
                  <div className="flex items-center gap-[2px]">
                    <Message fontSize="inherit" />
                    {task.activities.length}
                  </div>
                  <div className="flex items-center  gap-[2px]">
                    <AttachFile fontSize="inherit" />
                    {task.assets.length}
                  </div>
                  <div className="flex items-center  gap-[2px]">
                    <List fontSize="inherit" />
                    {task.subTasks.length}
                  </div>
                </div>

                {/* team */}
                <div className="relative flex px-2 items-center gap-1 py-4  border-b border-[var(--neutral)]">
                  {task.team.map((t, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: getInitialColor(index) }} // Inline styles for dynamic colors
                      className="relative left-0 -mr-2 h-4 w-4 flex justify-center items-center rounded-full p-3 md:p-4 text-white font-[500]"
                    >
                      {getInitials(t.name)}
                    </div>
                  ))}
                </div>

                {/* buttons */}
                <div className="flex items-center gap-2 px-2 py-2  border-b border-[var(--neutral)]">
                  <button className=" h-fit">Edit</button>
                  <button className=" h-fit bg-[var(--secondary-tint)] rounded-md text-white px-1">
                    Delete
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
