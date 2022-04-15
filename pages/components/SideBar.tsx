import React from "react";
import { FaSlidersH } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaBurn } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

function SideBar() {
  return (
    <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
      <Link href="/UserPanel">
        <div className="sidebar-btn">
          <FaUserCircle className="h-7 w-7" />
        </div>
      </Link>
      <Link href="/PreviousExpenses">
        <div className="sidebar-btn">
          <FaTable className="h-7 w-7" />
        </div>
      </Link>
      <Link href="/AddExpense">
        <div className="sidebar-btn">
          <FaBurn className="h-7 w-7" />
        </div>
      </Link>
      <Link href="/UserCars">
        <div className="sidebar-btn">
          <FaCarAlt className="h-7 w-7" />
        </div>
      </Link>
      <Link href="/UserSettings">
        <div className="sidebar-btn">
          <FaSlidersH className="h-7 w-7" />
        </div>
      </Link>
    </aside>
  );
}

export default SideBar;
