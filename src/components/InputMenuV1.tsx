import { Check, UnfoldMore } from "@mui/icons-material";
import { useState } from "react";
import clsx from "clsx";

export function InputMenuV1({
  data,
  selectedItem,
  setSelectedItem,
}: {
  data: string[];
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}) {
  // const [selectedItem, setSelectedItem] = useState(data[0]);
  const [menuListOpen, setMenuListOpen] = useState(false);

  function handleItemMenu(stage: string) {
    setSelectedItem(stage);
    setMenuListOpen(false);
  }
  function handleItemSelect() {
    setMenuListOpen(!menuListOpen);
  }
  return (
    <div data-exclude-click className=" relative">
      <div
        onClick={handleItemSelect}
        className=" border border-[var(--neutral)] px-2 py-1 rounded-md mb-4 text-sm h-[34px] flex items-center justify-between select-none"
      >
        <div className=" truncate">{selectedItem}</div>

        <UnfoldMore />
      </div>

      {/* lists */}
      <div
        className={` z-10 bg-white select-none absolute top-[34px] w-full border border-[var(--neutral)] px-2 py-2 rounded-md mb-4 text-sm ${
          menuListOpen ? "flex" : "hidden"
        } flex-col gap-4`}
      >
        {data.map((d) => (
          <div
            onClick={() => handleItemMenu(d)}
            className="flex gap-1 hover:bg-[var(--tinted-accent)]"
          >
            <div
              className={
                "text-base invisible" + clsx({ visible: selectedItem === d })
              }
            >
              <Check fontSize="inherit" />
            </div>

            <div>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
