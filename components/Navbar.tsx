"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="Logo" width={74} height={29} />
      </Link>
      <ul className=" hidden gap-12 h-full lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="  flexCenter pb-1.5 regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold  "
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className=" hidden lg:block self-end  ">
        <Button
          type={"button"}
          title={"Login"}
          icon={"/user.svg"}
          variant={"btn_dark_green"}
        />
      </div>

      <Image
        src={"/menu.svg"}
        width={32}
        height={32}
        alt="menu"
        className=" lg:hidden cursor-pointer inline-block"
        onClick={() => setToggle((perv) => !perv)}
      />

      <ul
        className={`${
          toggle ? "opacity-1 " : "opacity-0"
        } lg:hidden absolute w-[200px]  right-10 bg-green-50 p-4 flex flex-col top-16 rounded-xl regular-16 transition-opacity  `}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className=" my-1 cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
