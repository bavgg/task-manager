import { NotificationsNoneOutlined, Search } from "@mui/icons-material";


export default function Navbar() {
  return (
    <div className="flex justify-between p-4 h-fit w-full">
      {/* searchbar */}
      <div className=" relative">
        <Search
          fontSize="small"
          color="inherit"
          className=" text-[#9DA2AF] absolute bottom-[10px] left-2"
        />
        <input
          placeholder="Search..."
          className=" min-w-[250px]  bg-[var(--neutral)] px-8 py-2 rounded-full"
        />
      </div>

      {/* right components */}
      <div className="flex gap-2 text-center">
        <div className=" relative w-fit flex  items-center">
          <div className=" px-[4px]  absolute top-[2px] right-0  text-white text-[10px] font-[500] bg-red-500 rounded-full w-[15px] flex items-center justify-center h-[15px]">
            2
          </div>
          <NotificationsNoneOutlined />
        </div>
        <div className=" rounded-full bg-[var(--secondary)] px-4 py-2 text-white w-fit ">
          <div className="font-[700]  text-base">J</div>
        </div>
      </div>
    </div>
  );
}
