import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Dashboard } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="grid grid-cols-[auto_1fr] ">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col  h-full">
        <Navbar />

        {/* main board */}
        <div className="bg-[var(--neutral)] h-full px-8 py-4 ">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
