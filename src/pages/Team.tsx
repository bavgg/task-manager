import TeamTable from "../components/TeamTable";
import { Add } from "@mui/icons-material";

export default function Team() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <div className=" text-xl">Team Members</div>
        <div className="relative flex gap-2 text-white">
          <Add fontSize="inherit" className="absolute left-2 bottom-2" />
          <button className=" bg-[var(--secondary)] pl-8 pr-4 rounded-md py-1">
            Add New User
          </button>
        </div>
      </div>
      <TeamTable/>
    </>
  );
}
