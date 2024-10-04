"use client";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { Menus } from "./utils";
import Logo from "@/assets/logo.png";

export default function NavBar() {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-gray-800">
        <nav className=" px-3.5 flex-center-between w-full container mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <Image
              width={55}
              height={55}
              quality={100}  
              src={Logo}
              alt="Picture of the author"
            />
            {/* <img src={Logo} alt="" className="size-8" /> */}
            <h3 className="text-lg font-semibold">Framer</h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Sign In
            </button>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
