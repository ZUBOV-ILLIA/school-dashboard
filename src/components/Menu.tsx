// import { role } from "@/lib/data";
import { RoleState, setRole } from "@/app/GlobalRedux/role/roleSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/images/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/images/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/images/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      // {
      //   icon: "/images/attendance.png",
      //   label: "Attendance",
      //   href: "/list/attendance",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: "/images/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      // {
      //   icon: "/images/message.png",
      //   label: "Messages",
      //   href: "/list/messages",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: "/images/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/images/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/images/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

type Props = {
  isMenuOpened: boolean;
};

export default function Menu({ isMenuOpened }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const role = useSelector((state: { role: RoleState }) => state.role.role);

  useEffect(() => {
    const cookies = document.cookie?.split("=");
    const cookiesRole = cookies?.indexOf("role");

    if (cookiesRole !== -1) {
      dispatch(setRole(cookies[cookiesRole + 1]));
    } else {
      dispatch(setRole(""));
      router.push("/");
    }
  }, []);

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="block text-gray-400 font-light my-4">{i.title}</span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={(e) => {
                    if (["/settings", "/profile"].includes(item.href)) {
                      e.preventDefault();
                    }
                  }}
                  className={`flex items-center  md:justify-start ${
                    isMenuOpened ? "justify-start" : "justify-center"
                  } ${
                    ["/settings", "/profile"].includes(item.href)
                      ? "text-gray-200"
                      : "text-gray-500"
                  } gap-4 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight`}
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span
                    className={`${isMenuOpened ? "block" : "hidden"} md:block`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
