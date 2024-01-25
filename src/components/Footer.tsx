import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <div className=" container mx-auto  flex flex-col items-center px-5 py-8 sm:flex-row dark:bg-gray-900">
        <div className="flex flex-col items-center sm:flex-row">
          <p>Marcelo C. Plaza</p>
          <p className=" mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4 dark:text-gray-300">
            © {new Date().getFullYear()} MCP Digital using SecureClerk. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
