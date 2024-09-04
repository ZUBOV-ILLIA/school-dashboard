import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] 1g:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center xl:justify-start gap-2 my"
        >
          <Image src="/images/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden xl:block">Dashboard</span>
        </Link>

        <Menu />
      </div>

      {/* right */}
      <div className="w-[86%] md:w-[92%] 1g:w-[16%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
