import React from "react";

const Sidebar = () => {
  return (
    <nav className="w-full bg-blue-200 p-4 md:w-1/6 dark:bg-blue-950">
      <h2 className="mb-4 text-2xl font-bold text-white">Admin Panel</h2>
      <ul className="text-lg">
        <li className="my-2">
          <a
            href="#"
            className="block rounded p-2 text-white hover:bg-blue-300"
          >
            Dashboard
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="block rounded p-2 text-white hover:bg-blue-300"
          >
            Users
          </a>
        </li>
        <li className="my-2">
          <a
            href="#"
            className="block rounded p-2 text-white hover:bg-blue-300"
          >
            Inventory
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
