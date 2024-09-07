import Menu from "@/components/Menu";
import HeadNavbar from "@/components/HeadNavbar";
import SideMainMenu from "@/components/SideMainMenu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
