"use client";

import { RoleState } from "@/app/GlobalRedux/role/roleSlice";
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const SingleTeacherPage = ({ params }: { params: { id: string } }) => {
  const teacher = teachersData.find((el) => el.id === +params.id);
  const role = useSelector((state: { role: RoleState }) => state.role.role);

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {teacher && (
        <>
          {/* LEFT */}
          <div className="w-full xl:w-2/3">
            {/* TOP */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* USER INFO CARD */}
              <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4 flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <div className="relative aspect-square max-w-36 m-auto sm:m-0">
                    <Image
                      src={teacher.photo}
                      alt=""
                      layout="fill"
                      className="w-36 h-36 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-2/3 flex flex-col justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <h1 className="text-xl font-semibold">{teacher.name}</h1>
                    {role === "admin" && (
                      <FormModal
                        table="teacher"
                        type="update"
                        data={{
                          id: 1,
                          username: "deanguerrero",
                          email: "deanguerrero@gmail.com",
                          password: "password",
                          firstName: "Dean",
                          lastName: "Guerrero",
                          phone: "+1 234 567 89",
                          address: "1234 Main St, Anytown, USA",
                          bloodType: "A+",
                          dateOfBirth: "2000-01-01",
                          sex: "male",
                          img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                        }}
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{teacher.address}</p>
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                      <Image
                        src="/images/blood.png"
                        alt=""
                        width={14}
                        height={14}
                      />
                      <span>A+</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                      <Image
                        src="/images/date.png"
                        alt=""
                        width={14}
                        height={14}
                      />
                      <span>January 2025</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                      <Image
                        src="/images/mail.png"
                        alt=""
                        width={14}
                        height={14}
                      />
                      <span>{teacher.email}</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                      <Image
                        src="/images/phone.png"
                        alt=""
                        width={14}
                        height={14}
                      />
                      <span>+1 {teacher.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* SMALL CARDS */}
              <div className="flex-1 flex gap-4 justify-between flex-wrap">
                {/* CARD */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%]">
                  <Image
                    src="/images/singleAttendance.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <div className="">
                    <h1 className="text-xl font-semibold">90%</h1>
                    <span className="text-sm text-gray-400">Attendance</span>
                  </div>
                </div>
                {/* CARD */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%]">
                  <Image
                    src="/images/singleBranch.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <div className="">
                    <h1 className="text-xl font-semibold">2</h1>
                    <span className="text-sm text-gray-400">Branches</span>
                  </div>
                </div>
                {/* CARD */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%]">
                  <Image
                    src="/images/singleLesson.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <div className="">
                    <h1 className="text-xl font-semibold">6</h1>
                    <span className="text-sm text-gray-400">Lessons</span>
                  </div>
                </div>
                {/* CARD */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[47%]">
                  <Image
                    src="/images/singleClass.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <div className="">
                    <h1 className="text-xl font-semibold">
                      {teacher.classes.join(", ")}
                    </h1>
                    <span className="text-sm text-gray-400">Classes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
              <h1>Teacher&apos;s Schedule</h1>
              <BigCalendar />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
              <h1 className="text-xl font-semibold">Shortcuts</h1>
              <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
                  Teacher&apos;s Classes
                </Link>
                <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">
                  Teacher&apos;s Students
                </Link>
                <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">
                  Teacher&apos;s Lessons
                </Link>
                <Link className="p-3 rounded-md bg-pink-50" href="/">
                  Teacher&apos;s Exams
                </Link>
                <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
                  Teacher&apos;s Assignments
                </Link>
              </div>
            </div>
            <Performance />
            <Announcements />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleTeacherPage;
