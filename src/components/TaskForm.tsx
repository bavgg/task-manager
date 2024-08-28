import { useState } from "react";
import { summary } from "../assets/data";

import { InputMenuV1 } from "./specials/InputMenuV1";
import InputMenu from "./specials/InputMenu";

const STAGES = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORIRY = ["HIGH", "MEDIUM", "NORMAL", "LOW"];

export default function TaskForm() {
  const [selectedTeam, setSelectedTeam] = useState(["New User"]);
  const [selectedStage, setSelectedStage] = useState("TODO");
  const [selectedPriority, setSelectedPriority] = useState("NORMAL");

  return (
    <div className="bg-white p-8 w-[500px]">
      <div className="font-medium mb-4">Add Task</div>

      <form>
        <label>Task Title</label>
        <br />
        <input
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
            <button>Cancel</button>
            <button className="bg-[var(--secondary)] px-4 py-1 text-white rounded-md h-fit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
