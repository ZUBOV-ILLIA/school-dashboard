import Link from "next/link";

const Homepage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-2">
      <Link
        href="/admin"
        className="px-4 py-2 bg-red-600 border border-cyan-950 text-xl text-slate-100 rounded"
      >
        Admin
      </Link>
      <Link
        href="/student"
        className="px-4 py-2 bg-green-600 border border-cyan-950 text-xl text-slate-100 rounded"
      >
        Student
      </Link>
      <Link
        href="/teacher"
        className="px-4 py-2 bg-yellow-300 border border-cyan-950 text-xl text-slate-100 rounded"
      >
        Teacher
      </Link>
    </div>
  );
};

export default Homepage;
