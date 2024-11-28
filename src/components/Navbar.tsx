import { useState } from "react";
import { IoMenu } from "react-icons/io5";

interface MenuNavbar {
  title: string;
  href: string;
}

const menuNavbar: MenuNavbar[] = [
  { title: "Home", href: "/" },
  { title: "Eatery", href: "/eatery" },
  { title: "News", href: "/new" },
  { title: "About Us", href: "/aboutus" },
];

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="sticky top-0 h-[60px] flex justify-center items-center font-sans font-semibold text-white text-sm bg-blue-manadong">
      <div className=" container h-full xl:max-w-7xl flex items-center justify-between mx-[18px]">
        <div>
          <img
            src={"/assets/logo-navbar.png"}
            alt="logo-navbar"
            height={80}
            width={80}
            className="object-cover"
          />
        </div>
        <ul className="hidden h-full lg:flex items-center">
          {menuNavbar.map((d, i) => (
            <li
              key={i}
              className={`${
                i === active ? " text-slate-400" : ""
              } h-full hover:text-slate-400 transition-colors`}
            >
              <button
                onClick={() => setActive(i)}
                className=" h-full flex justify-center items-center px-[18px]"
              >
                {d.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="lg:hidden h-full flex">
          <button className="p-4 active:scale-95 transition-all">
            <IoMenu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
