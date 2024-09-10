"use client";

import Link from "next/link";

const Homepage = () => {
  function setRoleCookie(role: string) {
    document.cookie = `role=${role}; path=/; max-age=${60 * 60 * 24}`;
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-2">
      <Link
        href="/admin"
        className="px-4 py-2 bg-lamaPurple border border-cyan-950 text-xl rounded"
        onClick={() => {
          setRoleCookie("admin");
        }}
      >
        Admin
      </Link>
      <Link
        href="/student"
        className="px-4 py-2 bg-lamaPurple border border-cyan-950 text-xl rounded"
        onClick={() => {
          setRoleCookie("student");
        }}
      >
        Student
      </Link>
      <Link
        href="/teacher"
        className="px-4 py-2 bg-lamaPurple border border-cyan-950 text-xl rounded"
        onClick={() => {
          setRoleCookie("teacher");
        }}
      >
        Teacher
      </Link>
    </div>
  );
};

export default Homepage;
