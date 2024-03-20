import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  FaUsers,
  FaHouse,
  FaAddressBook,
  FaTable,
  FaPrint,
} from "react-icons/fa6";

const Sidebar = () => {
  let content = null;

  const router = useRouter();

  const [isProfileActive, setIsProfileActive] = useState(false);

  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const toggleSidebarWidth = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-44 h-full bg-white space-y-8 hover:bg-gray-50 ${
          sidebarExpanded ? "w-60" : ""
        }`}
      >
        <div className="flex flex-col h-full border-2">
          <div className="h-20 flex items-center px-8">
            <Link href="/" className="flex-none">
              <img
                src="https://floatui.com/logo-letter.png"
                width={35}
                className="mx-auto"
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col h-full">
            <ul className="px-4 text-sm font-medium flex-1">
              <li>
                <Link
                  href={"/"}
                  className={`relative flex items-center gap-x-2 text-gray-600 p-2 mb-3 rounded-lg  hover:bg-gray-200 group cursor-pointer ${
                    router.pathname === "/"
                      ? "bg-[#e9ecf4] group cursor-pointer"
                      : ""
                  }`}
                >
                  <FaHouse
                    className={`text-gray-500 ${
                      router.pathname === "/" ? "text-[#646ed4]" : ""
                    }`}
                  />
                  <div
                    className={`text-gray-500 ${
                      router.pathname === "/" ? "text-[#646ed4]" : ""
                    }`}
                  >
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={"/Participants"}
                  className={`relative flex items-center gap-x-2 text-gray-600 p-2 mb-3 rounded-lg  hover:bg-gray-200 group cursor-pointer ${
                    router.pathname === "/Participants"
                      ? "bg-[#e9ecf4] group cursor-pointer"
                      : ""
                  }`}
                >
                  <FaAddressBook
                    className={`text-gray-500 ${
                      router.pathname === "/Participants"
                        ? "text-[#646ed4]"
                        : ""
                    }`}
                  />
                  <div
                    className={`text-[gray] ${
                      router.pathname === "/Participants"
                        ? "text-[#646ed4]"
                        : ""
                    }`}
                  >
                    Participants
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={"/Team"}
                  className={`relative flex items-center gap-x-2 text-gray-600 p-2 mb-3 rounded-lg  hover:bg-gray-200 group cursor-pointer ${
                    router.pathname === "/Team"
                      ? "bg-[#e9ecf4] group cursor-pointer"
                      : ""
                  }`}
                >
                  <FaUsers
                    className={`text-gray-500 ${
                      router.pathname === "/Team" ? "text-[#646ed4]" : ""
                    }`}
                  />
                  <div
                    className={`text-gray-500 ${
                      router.pathname === "/Team" ? "text-[#646ed4]" : ""
                    }`}
                  >
                    Team
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={"/Invoice"}
                  className={`relative flex items-center gap-x-2 text-gray-600 p-2 mb-3 rounded-lg  hover:bg-gray-200 group cursor-pointer ${
                    router.pathname === "/Invoice"
                      ? "bg-[#e9ecf4] group cursor-pointer"
                      : ""
                  }`}
                >
                  <FaPrint
                    className={`text-gray-500 ${
                      router.pathname === "/Invoice" ? "text-[#646ed4]" : ""
                    }`}
                  />
                  <div
                    className={`text-gray-500 ${
                      router.pathname === "/Invoice" ? "text-[#646ed4]" : ""
                    }`}
                  >
                    Invoice
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={"/RegisterTable"}
                  className={`relative flex items-center gap-x-2 text-gray-600 p-2 mb-3 rounded-lg  hover:bg-gray-200 group cursor-pointer ${
                    router.pathname === "/RegisterTable"
                      ? "bg-[#e9ecf4] group cursor-pointer"
                      : ""
                  }`}
                >
                  <FaTable
                    className={`text-gray-500 ${
                      router.pathname === "/RegisterTable"
                        ? "text-[#646ed4]"
                        : ""
                    }`}
                  />
                  <div
                    className={`text-gray-500 ${
                      router.pathname === "/RegisterTable"
                        ? "text-[#646ed4]"
                        : ""
                    }`}
                  >
                    Register Table
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={"/TeamsTable"}
                  className={`relative flex items-center gap-x-2 text-gray-600 p-2 mb-3 rounded-lg  hover:bg-gray-200 group cursor-pointer ${
                    router.pathname === "/TeamsTable"
                      ? "bg-[#e9ecf4] group cursor-pointer"
                      : ""
                  }`}
                >
                  <FaTable
                    className={`text-gray-500 ${
                      router.pathname === "/TeamsTable" ? "text-[#646ed4]" : ""
                    }`}
                  />
                  <div
                    className={`text-gray-500 ${
                      router.pathname === "/TeamsTable" ? "text-[#646ed4]" : ""
                    }`}
                  >
                    Teams Table
                  </div>
                </Link>
              </li>
            </ul>
            {/* Expand The SideBar ----------*/}
            {/* <button
              className="absolute top-6 left-56"
              onClick={toggleSidebarWidth}
            >
              Toggle
            </button> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
