import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { stats, summary } from "../assets/data";
import Barchart from "../components/charts/Barchart";
import { getStageColor, getInitials, getInitialColor } from "../utils";
import moment from "moment";

function Dashboard() {
  return (
    <div className="grid grid-cols-[auto_1fr] ">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col  h-full">
        <Navbar />

        {/* main board */}
        <div className="bg-[var(--neutral)] h-full px-8 py-4 ">
          {/* stats */}
          <div className="grid lg:grid-cols-4 gap-4 grid-cols-1">
            {stats.map(({ _id, label, total, icon, bg }) => (
              <div key={_id} className="bg-white rounded-md p-4">
                <div>{label}</div>
                <div className="flex justify-between items-center">
                  <div className=" text-xl font-[500]">{total}</div>
                  <div className={`${bg} text-white rounded-full p-2`}>
                    {icon}
                  </div>
                </div>
                <div className="text-xs">110 last month</div>
              </div>
            ))}
          </div>

          {/* chart */}
          <div className="bg-white my-4 rounded-md">
            <Barchart />
          </div>

          <div className=" grid grid-cols-[2fr,1fr] w-full bg-[var(--neutral)] gap-4">
            {/* task table */}
            <div className="p-4 bg-white rounded-md">
              <div className="grid grid-cols-[1fr,0.33fr,0.33fr,0.33fr] font-[500] gap-2 mb-2">
                <div>Task Title</div>
                <div>Priority</div>
                <div>Team</div>
                <div>Created At</div>
              </div>
              {/*  h-[300px] overflow-auto */}

              <div className=" h-[320px] overflow-auto">
                {summary.last10Task.map((task) => (
                  <div className="grid grid-cols-[1fr,0.33fr,0.33fr,0.33fr] gap-2 py-2 border-t border-b border-[var(--neutral)]">
                    <div className="flex gap-2 items-center">
                      <div
                        className={`h-4 w-4 rounded-full bg-[${getStageColor(
                          task.stage
                        )}]`}
                      ></div>
                      <div>{task.title}</div>
                    </div>
                    <div>{task.priority}</div>
                    <div className="relative flex gap-1">
                      {task.team.map((t, index) => (
                        <div
                          className={`relative left-0 -mr-2 h-7 w-7 flex justify-center items-center rounded-full p-2 bg-[${getInitialColor(
                            index
                          )}] text-white text-xs font-[500]`}
                        >
                          {getInitials(t.name)}
                        </div>
                      ))}
                    </div>
                    <div>{moment(task.createdAt).fromNow()}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* users table */}
            <div className="p-4 bg-white rounded-md">
              <div className="grid grid-cols-[1fr,0.5fr,0.5fr] font-[500] gap-2 mb-2">
                <div>Full Name</div>
                <div>Status</div>
                <div>Created At</div>
              </div>

              <div className=" h-[320px] overflow-auto">
                {summary.users.map((user) => (
                  <div className="grid grid-cols-[1fr,0.5fr,0.5fr] gap-2 py-2 border-t border-b border-[var(--neutral)]">
                    <div className="flex gap-2 items-center">
                      <div
                        className={`h-9 w-9 text-sm flex items-center justify-center text-white font-[500] rounded-full bg-[var(--secondary)]`}
                      >
                        {getInitials(user.name)}
                      </div>
                      <div className="flex flex-col gap-1">
                        <div>{user.name}</div>
                        <div className=" text-xs">{user.role}</div>
                      </div>
                    </div>
                
                    <div className=" flex items-center justify-center  py-1 px-2 bg-[var(--secondary-tint)] w-fit rounded-lg">
                      Active
                    </div>
                    <div>{moment(user.createdAt).fromNow()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
