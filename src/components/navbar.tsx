import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    if (modal === false) {
      setModal(true);
    } else if (modal === true) {
      setModal(false);
    }
  };
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl items-center justify-between p-4">
        <div className="flex flex-row justify-between">
          <Link
            href={"/"}
            className="p-2 text-left text-lg font-semibold text-blue-600 hover:text-blue-800"
          >
            Cheapa Car Hire
          </Link>
          <div className="flex flex-col items-end">
            <button
              type="button"
              tabIndex={0}
              className="dropdown dropdown-end inline-block h-10 w-10 sticky top-0 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              onClick={handleModal}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {!modal ? (
              <div
                tabIndex={0}
                className="w-auto flex-row justify-end collapse md:visible rounded-none"
              >
                <Link
                  className="p-2 text-blue-600 hover:text-blue-800"
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  className="p-2 text-blue-600 hover:text-blue-800"
                  href={"/car-gallery"}
                >
                  Car Gallery
                </Link>
                <Link
                  className="p-2 text-blue-600 hover:text-blue-800"
                  href={"/about"}
                >
                  About Us
                </Link>
              </div>
            ) : (
              <div
                tabIndex={0}
                className="relative py-2"
              >
                <div className="absolute flex flex-col w-40 right-0 rounded-lg border-none items-center bg-white">
                <Link
                  className="p-2 text-blue-600 hover:text-blue-800"
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  className="p-2 text-blue-600 hover:text-blue-800"
                  href={"/car-gallery"}
                >
                  Car Gallery
                </Link>
                <Link
                  className="p-2 text-blue-600 hover:text-blue-800"
                  href={"/about"}
                >
                  About Us
                </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
