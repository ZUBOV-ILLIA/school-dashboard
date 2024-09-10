"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { setRole } from "./GlobalRedux/role/roleSlice";

const Homepage = () => {
  const dispatch = useDispatch();

  function handleSetRole(role: string) {
    document.cookie = `role=${role}; path=/; max-age=${60 * 60 * 24}`;
    dispatch(setRole(role));
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-2">
      <Link
        href="/admin"
        className="px-4 py-2 bg-lamaPurple border border-cyan-950 text-xl rounded"
        onClick={() => {
          handleSetRole("admin");
        }}
      >
        Admin
      </Link>
      <Link
        href="/student"
        className="px-4 py-2 bg-lamaPurple border border-cyan-950 text-xl rounded"
        onClick={() => {
          handleSetRole("student");
        }}
      >
        Student
      </Link>
      <Link
        href="/teacher"
        className="px-4 py-2 bg-lamaPurple border border-cyan-950 text-xl rounded"
        onClick={() => {
          handleSetRole("teacher");
        }}
      >
        Teacher
      </Link>
    </div>
  );
};

export default Homepage;
