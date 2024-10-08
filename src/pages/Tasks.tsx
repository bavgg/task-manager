import { Add } from "@mui/icons-material";
import TasksTable from "../components/TasksTable";

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
      <TasksTable />
    </>
  );
}
