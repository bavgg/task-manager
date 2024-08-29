import TaskForm from "./TaskForm";

export default function TaskFormModal({ modalOpen }: { modalOpen: boolean }) {
  return (
    <>
      <div
        style={{ display: modalOpen ? "flex" : "none" }}
        className="z-[4] inset-0 h-[100vh] absolute bg-[rgba(0,0,0,0.75)] flex justify-center "
      >
        <TaskForm />
      </div>
    </>
  );
}
