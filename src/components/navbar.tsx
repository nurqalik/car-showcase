import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl items-center p-4">
        <div className="flex flex-row justify-between">
          <Link
            href={"/"}
            className="p-2 text-left text-lg font-semibold text-blue-600 hover:text-blue-800"
          >
            Cheapa Car Hire
          </Link>
          <div className="flex flex-row-reverse items-end">
            <Link
              className="p-2 text-blue-600 hover:text-blue-800"
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              className="p-2 text-blue-600 hover:text-blue-800"
              href={"/car-gallery"}
            >
              Car Gallery
            </Link>
            <Link className="p-2 text-blue-600 hover:text-blue-800" href={"/"}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
