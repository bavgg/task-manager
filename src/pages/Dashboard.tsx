import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return <div className="grid grid-cols-[auto_1fr] "> 
    <div>
      <Sidebar />
    </div>
    <div className="flex flex-col  h-full">
      <Navbar />
      {/* main board */}
      <div className="bg-[var(--neutral)] h-full">

      </div>
    </div>
  </div>;
}

export default Dashboard;
