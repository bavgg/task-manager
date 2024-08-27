import { tasks } from "../assets/data";
import { getStageColor, getInitialColor, getInitials } from "../utils";
import moment from "moment";
import { AttachFile, List, Message } from "@mui/icons-material";

function TasksTable() {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className=" h-fit overflow-auto whitespace-pre-line">
        <div className="   grid grid-cols-[auto,auto,auto,auto,auto,auto]">

          {/* header */}
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Task Title
          </div>
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Priority
          </div>
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Ceated At
          </div>
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Assets
          </div>
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Team
          </div>

          {/* body */}
          <div className="px-2 py-4 border-b border-[var(--neutral)]"></div>
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
                <button className=" h-fit bg-[var(--tertiary)] rounded-md text-white px-1">
                  Delete
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TasksTable;
