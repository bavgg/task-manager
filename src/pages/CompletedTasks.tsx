import TasksTable from "../components/TasksTable";

function CompletedTasks() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className=" text-xl">Completed Tasks</div>
      </div>
      <TasksTable />
    </>
  );
}

export default CompletedTasks;
