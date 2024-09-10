"use client";

import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import { useEffect, useState } from "react";
import useWindowWidth from "@/customHoocks/useWindowWidth";
import { usePathname } from "next/navigation";

export default function SideMainMenu() {
  const pathName = usePathname();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth !== "sm") {
      setIsMenuOpened(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [pathName]);

  const toggleMenu = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>
  ) => {
    e.preventDefault();

    if (windowWidth === "sm") {
      setIsMenuOpened(!isMenuOpened);
    }
  };

  return (
    <>
      <div
        className={`absolute md:static rounded-lg ${
          isMenuOpened
            ? "bg-white shadow-lg h-max z-20"
            : windowWidth === "sm"
            ? "max-h-16 overflow-hidden"
            : ""
        } left-0 top-0 p-4 min-w-max`}
      >
        <Link
          href="#"
          className="flex items-center justify-start mb-4 xl:mb-0 gap-2 my"
          onClick={toggleMenu}
        >
          <Image src="/images/logo.png" alt="logo" width={32} height={32} />
          <span
            className={`${
              !isMenuOpened && windowWidth === "sm" ? "hidden" : ""
            } md:block font-bold`}
          >
            Dashboard
          </span>
        </Link>
        <Menu isMenuOpened={isMenuOpened && windowWidth === "sm"} />
      </div>
      <div
        className={`${
          !isMenuOpened ? "hidden" : ""
        } fixed top-0 bottom-0 left-0 right-0 bg-black opacity-40 z-10`}
        onClick={toggleMenu}
      ></div>
    </>
  );
}
