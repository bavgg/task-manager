import { summary } from "../assets/data";
import { getInitials } from "../utils";

export default function TeamTable() {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className=" h-fit overflow-auto whitespace-pre-line">
        <div className="   grid grid-cols-[auto,auto,auto,auto,auto,auto]">
          {/* header */}
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Full Name
          </div>
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Title
          </div>
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Email
          </div>
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Role
          </div>
          <div className="px-2 py-4 border-b border-[var(--neutral)] font-medium">
            Active
          </div>

          {/* body */}
          <div className="px-2 py-4 border-b border-[var(--neutral)]"></div>
          {summary.users.map((user) => (
            // row
            <>
              {/* full name */}
              <div className="flex gap-2 items-center py-4 px-2  border-b border-[var(--neutral)]">
                <div
                  className={`h-9 w-9 text-sm flex items-center justify-center text-white font-[500] rounded-full bg-[var(--secondary)]`}
                >
                  {getInitials(user.name)}
                </div>
                <div>{user.name}</div>
              </div>

              {/* task title */}
              <div className="py-4 px-2  border-b border-[var(--neutral)]">
                {user.title}
              </div>

              {/* email */}
              <div className="py-4 px-2  border-b border-[var(--neutral)]">
                {user.email}
              </div>

              {/* role */}
              <div className="py-4 px-2  border-b border-[var(--neutral)]">
                {user.role}
              </div>

              {/* active */}
              <div className="flex px-2 gap-1 items-center py-4  border-b border-[var(--neutral)]">
                <button className=" h-fit bg-[var(--secondary-tint)] rounded-md text-white px-1">
                  Active
                </button>
              </div>

              {/* buttons */}
              <div className="flex items-center gap-2 px-2 py-2  border-b border-[var(--neutral)]">
                <button className=" h-fit">Edit</button>
                <button className=" h-fit bg-[var(--secondary-tint)] rounded-md text-white px-1">
                  Delete
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
