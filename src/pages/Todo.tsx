import TasksTable from "../components/TasksTable";

export default function Todo() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className=" text-xl">Todo Tasks</div>
      </div>
      <TasksTable />
    </>
  );
}
