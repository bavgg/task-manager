import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="bg-[var(--neutral)] h-full px-8 py-4">{children}</div>
      </div>
    </div>
  );
}
