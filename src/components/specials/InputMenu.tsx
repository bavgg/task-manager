import { useState, useEffect } from "react";
import { Check, UnfoldMore } from "@mui/icons-material";
import { getInitials } from "../../utils";
import clsx from "clsx";

type dataType = {
  _id: string;
  name: string;
  email: string;
  title: string;
  role: string;
  isActive: boolean;
  createdAt: string;
};

export default function InputMenu({
  data,
  selectedItems,
  setSelectedItems,
}: {
  data: dataType[];
  selectedItems: string[];
  setSelectedItems: (
    value: string[] | ((prevItems: string[]) => string[])
  ) => void;
}) {
  const [menuTeamOpen, setMenuTeamOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-exclude-click]")) {
        setMenuTeamOpen(false);
      }

      if (!target.closest("[data-exclude-click2]")) {
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
    setSelectedItems((prevItems) => {
      if (prevItems.includes(user)) {
        return prevItems.filter((item: string) => item !== user);
      }

      return [...prevItems, user];
    });
  }

  function handleTeam() {
    setMenuTeamOpen(!menuTeamOpen);
  }

  return (
    <div data-exclude-click className=" relative">
      <div
        onClick={handleTeam}
        className=" border border-[var(--neutral)] px-2 py-1 rounded-md mb-4 text-sm h-[34px] flex items-center justify-between select-none"
      >
        <div className=" truncate">{selectedItems.join(", ")}</div>

        <UnfoldMore />
      </div>

      {/* users menu */}
      <div
        data-exclude-click2
        className={` z-10 bg-white select-none absolute top-[34px] w-full border border-[var(--neutral)] px-2 py-2 rounded-md mb-4 text-sm ${
          menuTeamOpen ? "flex" : "hidden"
        } flex-col gap-4`}
      >
        {data.map((item) => (
          <div
            onClick={() => handleUser(item.name)}
            className="flex gap-1 hover:bg-[var(--tinted-accent)]"
          >
            <div
              className={
                "text-base invisible" +
                clsx({ visible: selectedItems.includes(item.name) })
              }
            >
              <Check fontSize="inherit" />
            </div>
            <div className="text-white text-[10px] h-6 w-6 flex justify-center items-center rounded-full bg-[var(--secondary)]">
              {getInitials(item.name)}
            </div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
