import { useRef, useState } from "react";
import { summary } from "../assets/data";

import { InputMenuV1 } from "./specials/InputMenuV1";
import InputMenu from "./specials/InputMenu";

const STAGES = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORIRY = ["HIGH", "MEDIUM", "NORMAL", "LOW"];

export default function TaskForm() {
  // form data
  const [selectedTeam, setSelectedTeam] = useState(["New User"]);
  const [selectedStage, setSelectedStage] = useState("TODO");
  const [selectedPriority, setSelectedPriority] = useState("NORMAL");
  const taskTitleRef = useRef<HTMLInputElement>(null);
  const taskDateRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleCancel(event: React.MouseEvent) {
    event.preventDefault();
  }

  function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    const formEleement = formRef.current;
    formEleement?.reportValidity();
  }
  return (
    <div
      data-exclude-click
      className=" rounded-md m-auto bg-white p-8 w-[500px] z-10 shadow-[0_5px_40px_rgba(0,0,0,.4)] "
    >
      <div className="font-medium mb-4">Add Task</div>

      <form ref={formRef}>
        <label>Task Title</label>
        <br />
        <input
          ref={taskTitleRef}
          required
          type=""
          placeholder="Task Title"
          className="border border-[var(--neutral)] px-2 py-1 rounded-md mb-4 w-full"
        />

        <br />

        {/* asign task to */}
        <label>Assign Task To:</label>
        <br />
        <InputMenu
          data={summary.users}
          selectedItems={selectedTeam}
          setSelectedItems={setSelectedTeam}
        />

        <div className="grid grid-cols-2 gap-4">
          {/* task stage */}
          <div>
            <label>Task Stage</label>
            <br />
            <InputMenuV1
              data={STAGES}
              selectedItem={selectedStage}
              setSelectedItem={setSelectedStage}
            />
          </div>

          {/* task date */}
          <div>
            <label>Task Date</label>
            <br />
            <input
              ref={taskDateRef}
              required
              type="date"
              className="border border-[var(--neutral)] px-2 py-1 rounded-md mb-4 w-full"
            />
          </div>
        </div>

        {/* priority level */}
        <label>Priority Level</label>
        <br />
        <InputMenuV1
          data={PRIORIRY}
          selectedItem={selectedPriority}
          setSelectedItem={setSelectedPriority}
        />

        {/* buttons */}
        <div className="py-8 flex justify-end">
          <div className="flex gap-4">
            <button data-cancel onClick={handleCancel}>
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[var(--secondary)] px-4 py-1 text-white rounded-md h-fit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
