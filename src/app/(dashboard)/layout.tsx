"use client";

import Menu from "@/components/Menu";
import HeadNavbar from "@/components/HeadNavbar";
import SideMainMenu from "@/components/SideMainMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RoleState } from "../GlobalRedux/role/roleSlice";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const role = useSelector((state: { role: RoleState }) => state.role.role);

  return (
    <div className="min-h-screen flex">
      {/* left */}
      <div className="w-0 h-0 p-0 md:w-max relative">
        <SideMainMenu />
      </div>

      {/* right */}
      <div className="bg-[#f7f8fa] overflow-scroll flex flex-col grow">
        <HeadNavbar />
        {children}
      </div>
    </div>
  );
}
