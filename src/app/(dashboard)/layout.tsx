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
      <div className="w-0 h-0 p-0 md:w-[8%] lg:w-[16%] xl:w-[14%] relative">
        <SideMainMenu />
      </div>

      {/* right */}
      <div className="md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll flex flex-col">
        <HeadNavbar />
        {children}
      </div>
    </div>
  );
}
