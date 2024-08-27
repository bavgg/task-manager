import {
  AddTask,
  Dashboard,
  Delete,
  Group,
  PendingActionsOutlined,
  Settings,
  Task,
  TaskAlt,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const fontSize = 'small';
const linkData = [
  {
    label: "Dashboard",
    link: "/",
    icon: <Dashboard fontSize={fontSize}/>,
  },
  {
    label: "Tasks",
    link: "/tasks",
    icon: <Task fontSize={fontSize}/>,
  },
  {
    label: "Completed",
    link: "/completed-tasks",
    icon: <TaskAlt fontSize={fontSize}/>,
  },
  {
    label: "In Progress",
    link: "/inprogress-tasks",
    icon: <PendingActionsOutlined fontSize={fontSize}/>,
  },
  {
    label: "To Do",
    link: "/todo-tasks",
    icon: <PendingActionsOutlined fontSize={fontSize}/>,
  },
  {
    label: "Team",
    link: "/team",
    icon: <Group fontSize={fontSize} />,
  },
  {
    label: "Trash",
    link: "/trash",
    icon: <Delete fontSize={fontSize} />,
  },
];

export default function Sidebar() {
  const [selectedLink, setSelectedLink ] = useState({label: 'Dashboard', url: '/'});
  const navigate = useNavigate();

  useEffect(() => {
    navigate(selectedLink.url);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLink])

  function handleLink(label: string, url: string) {
    setSelectedLink({label, url});
  }

  return (
    <div className=" hidden lg:block text-[var(--text)] py-4 md:px-4 lg:px-16 w-auto h-screen  overflow-auto">
      {/* header */}
      <div className="flex gap-2 text-white items-center mb-16">
        <div className="bg-[var(--secondary)] flex justify-center items-center rounded-full p-1">
          <AddTask />
        </div>
        <div className="text-[var(--text)] text-lg font-[500]">TaskCrash</div>
      </div>

      {/* links */}
      <div className="flex flex-col gap-8">
        {linkData.map((link) => (
          <div onClick={() => handleLink(link.label, link.link)} className={`${selectedLink.label === link.label && 'bg-[var(--secondary)] text-white '} flex gap-2 p-2 hover:bg-[var(--secondary-tint)] hover:text-[var(--text)] cursor-pointer rounded-md items-center`}>
            <div className="text-xs">{link.icon}</div>
            <div>{link.label}</div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className="flex gap-2 p-2 items-center mt-[100px]">
        <Settings  fontSize="small"/>
        <div>Settings</div>
      </div>
    </div>
  );
}
