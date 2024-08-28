import { Check, UnfoldMore } from "@mui/icons-material";
import { useState } from "react";
import { summary } from "../assets/data";
import { getInitials } from "../utils";
import clsx from "clsx";
import { useEffect } from "react";
import { InputMenuV1 } from "./InputMenuV1";

const STAGES = ["TODO", "IN PROGRESS", "COMPLETED"];
const PRIORIRY = ["HIGH", "MEDIUM", "NORMAL", "LOW"];

export default function CreateTaskForm() {
  const [selectedTeam, setSelectedTeam] = useState(["New User"]);
  const [selectedStage, setSelectedStage] = useState('TODO');
  const [selectedPriority, setSelectedPriority] = useState('NORMAL');
  
  const [menuTeamOpen, setMenuTeamOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-exclude-click]")) {
        setMenuTeamOpen(false);
      }
    }

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleUser(user: string) {
    setSelectedTeam((prevTeam) => {
      if (prevTeam.includes(user)) {
        return prevTeam.filter((item) => item !== user);
      }

      return [...prevTeam, user];
    });
  }

  function handleTeam() {
    setMenuTeamOpen(!menuTeamOpen);
  }
  

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
        <div data-exclude-click className=" relative">
          <div
            onClick={handleTeam}
            className=" border border-[var(--neutral)] px-2 py-1 rounded-md mb-4 text-sm h-[34px] flex items-center justify-between select-none"
          >
            <div className=" truncate">{selectedTeam.join(", ")}</div>

            <UnfoldMore />
          </div>

          {/* users menu */}
          <div
            className={` z-10 bg-white select-none absolute top-[34px] w-full border border-[var(--neutral)] px-2 py-2 rounded-md mb-4 text-sm ${
              menuTeamOpen ? "flex" : "hidden"
            } flex-col gap-4`}
          >
            {summary.users.map((user) => (
              <div
                onClick={() => handleUser(user.name)}
                className="flex gap-1 hover:bg-[var(--tinted-accent)]"
              >
                <div
                  className={
                    "text-base invisible" +
                    clsx({ visible: selectedTeam.includes(user.name) })
                  }
                >
                  <Check fontSize="inherit" />
                </div>
                <div className="text-white text-[10px] h-6 w-6 flex justify-center items-center rounded-full bg-[var(--secondary)]">
                  {getInitials(user.name)}
                </div>
                <div>{user.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* task stage */}
          <div>
            <label>Task Stage</label>
            <br />
            <InputMenuV1 data={STAGES} selectedItem={selectedStage}  setSelectedItem={setSelectedStage}/>
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
        <InputMenuV1 data={PRIORIRY} selectedItem={selectedPriority}  setSelectedItem={setSelectedPriority}/>

        {/* buttons */}
        <div className="py-8 flex justify-end">
          <div className="flex gap-4">
            <button>Cancel</button>
            <button className="bg-[var(--secondary)] px-4 py-1 text-white rounded-md h-fit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
