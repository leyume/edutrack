import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  let location = useLocation();

  let menuDefault = [
    {
      label: "Dashboard",
      link: "/admin/dashboard",
      icon: "i-tabler-layout-dashboard",
    },
    {
      label: "Manage Teachers",
      link: "/admin/teachers",
      icon: "i-tabler-user-edit",
    },
    {
      label: "Manage Students",
      link: "/admin/students",
      icon: "i-tabler-school",
    },
    {
      label: "Attendance",
      link: "/admin/attendance",
      icon: "i-tabler-checkup-list",
    },
    {
      label: "Profile",
      link: "/admin/profile",
      icon: "i-tabler-user-circle",
    },
  ];

  let menuTeacher = [
    {
      label: "Dashboard",
      link: "/teachers/dashboard",
      icon: "i-tabler-layout-dashboard",
    },
    {
      label: "Classes",
      link: "/teachers/teachers",
      icon: "i-tabler-users-group",
    },
    {
      label: "Students",
      link: "/teachers/students",
      icon: "i-tabler-school",
    },
    {
      label: "Report",
      link: "/teachers/report",
      icon: "i-tabler-report",
    },
    {
      label: "Profile",
      link: "/teachers/teachersProfile",
      // link: "/teachers/profile",
      icon: "i-tabler-user-circle",
    },
  ];

  let menuGuardian = [
    {
      label: "Dashboard",
      link: "/guardian/dashboard",
      icon: "i-tabler-layout-dashboard",
    },
    {
      label: "Ward",
      link: "/guardian/wards",
      // link: "/guardian/students",
      icon: "i-tabler-school",
    },
    {
      label: "Guardian",
      link: "/guardian/guardians",
      // link: "/guardian/teachers",
      icon: "i-tabler-user-shield",
    },
    {
      label: "Profile",
      link: "/guardian/guardianProfile",
      // link: "/guardian/profile",
      icon: "i-tabler-user-circle",
    },
  ];

  let [menu, setMenu] = useState(menuDefault);

  useEffect(() => {
    const updateMenu = () => {
      let newMenu = [];

      if (location.pathname === "/admin/students/add") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/students",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Create Student",
            link: "/admin/students/add",
            icon: "i-tabler-school",
          },
        ];
      } else if (location.pathname === "/admin/teachers/add") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/teachers",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Create Teacher",
            link: "/admin/teachers/add",
            icon: "i-tabler-user-edit",
          },
        ];
      } else if (location.pathname === "/students/teacherDetails") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/teachers",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "View Teachers Details",
            link: "/students/teachers",
            icon: "i-tabler-user-edit",
          },
        ];
      } else if (location.pathname === "/students/searchTeacher") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/teachers",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Update Teachers Details",
            link: "/students/searchTeacher",
            icon: "i-tabler-user-search",
          },
        ];
      } else if (location.pathname === "/students/updateTeacher") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/teachers",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Teacher Details",
            link: "/students/updateTeacher",
            icon: "i-tabler-user-edit",
          },
        ];
      } else if (location.pathname === "/students/studentDetails") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/students",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "View Student Details",
            link: "/students/studentDetails",
            icon: "i-tabler-user-edit",
          },
        ];
      } else if (location.pathname === "/students/searchStudent") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/students",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Update Student Details",
            link: "/students/searchStudent",
            icon: "i-tabler-user-search",
          },
        ];
      } else if (location.pathname === "/students/updateStudent") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/students",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Student Details",
            link: "/students/updateStudent",
            icon: "i-tabler-user-edit",
          },
        ];
      } else if (location.pathname === "/profile/repProfile") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/profile",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Representative",
            link: "/profile/repProfile",
            icon: "i-tabler-user-circle",
          },
        ];
      } else if (location.pathname === "/profile/instituteProfile") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/profile",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Institution",
            link: "/profile/instituteProfile",
            icon: "i-tabler-building-bank",
          },
        ];
      } else if (location.pathname === "/attendance/teachersAttendance") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/attendance",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Teachers Attendance",
            link: "/attendance/teachersAttendance",
            icon: "i-tabler-user-edit",
          },
        ];
      } else if (location.pathname === "/attendance/studentsAttendance") {
        newMenu = [
          {
            label: "Back",
            link: "/admin/attendance",
            icon: "i-tabler-arrow-back-up",
          },
          {
            label: "Students Attendance",
            link: "/attendance/studentsAttendance",
            icon: "i-tabler-school",
          },
        ];
      } else if (location.pathname.startsWith("/teachers/")) {
        newMenu = menuTeacher;
      } else if (location.pathname.startsWith("/guardian/")) {
        if (location.pathname === "/guardian/createGuardian") {
          newMenu = [
            {
              label: "Back",
              link: "/guardian/guardians",
              icon: "i-tabler-arrow-back-up",
            },
            {
              label: "Create Guardian",
              link: "/guardian/createGuardian",
              icon: "i-tabler-user-plus",
            },
          ];
        } else {
          newMenu = menuGuardian;
        }
      } else {
        newMenu = menuDefault;
      }

      setMenu(newMenu);
    };

    updateMenu();
  }, [location]);

  return (
    <aside className="bg-#E5E2EA w-60 p-6 fixed h-screen top-0">
      <Link to="/" className="text-brand-pink text-4xl font-bold">
        Edu<span className="text-brand-blue">Track</span>
      </Link>
      <nav
        className="mt-8 text-black
        [&>ul>li]:rounded-2 [&>ul>li]:mt-1 [&>ul>li:hover]:bg-brand-blue [&>ul>li>:hover]:text-white  
        [&>ul>li>a]:flex [&>ul>li>a]:gap-2 [&>ul>li>a]:text-dark-900 [&>ul>li>a]:p-3.5
        [&>ul>li.active]:bg-brand-blue [&>ul>li.active>a]:text-white
        [&>ul>li]:transition-all [&>ul>li]:duration-500 [&>ul>li>a]:transition-all [&>ul>li>a]:duration-500"
      >
        <ul className="list-none">
          {menu.map((m, index) => (
            <li key={index} className={m.link === location.pathname ? "active" : ""}>
              <Link to={m.link}>
                <span className={m.icon} />
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
