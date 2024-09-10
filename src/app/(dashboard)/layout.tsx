"use client";

import Menu from "@/components/Menu";
import HeadNavbar from "@/components/HeadNavbar";
import SideMainMenu from "@/components/SideMainMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [role, setRole] = useState("");

  useEffect(() => {
    const cookies = document.cookie?.split("=");
    const cookiesRole = cookies?.indexOf("role");

    if (cookiesRole !== -1) {
      setRole(cookies[cookiesRole + 1]);
    } else {
      router.push("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex">
      {role && (
        <>
          {/* left */}
          <div className="w-0 h-0 p-0 md:w-max relative">
            <SideMainMenu />
          </div>

          {/* right */}
          <div className="bg-[#f7f8fa] overflow-scroll flex flex-col grow">
            <HeadNavbar />
            {children}
          </div>
        </>
      )}
    </div>
  );
}
