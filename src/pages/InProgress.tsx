import TasksTable from "../components/TasksTable";

export default function InProgress() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className=" text-xl">In Progress Tasks</div>
      </div>
      <TasksTable />
    </>
  );
}
