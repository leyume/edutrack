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
      link: "/teacher/dashboard",
      icon: "i-tabler-layout-dashboard",
    },
    {
      label: "Classes",
      link: "/teacher/teachers/classes",
      icon: "i-tabler-users-group",
    },
    {
      label: "Students",
      link: "/teacher/teachers/students",
      icon: "i-tabler-school",
    },
    {
      label: "Report",
      link: "/teacher/teachers/reports",
      icon: "i-tabler-report",
    },
    {
      label: "Profile",
      link: "/teacher/teachers/profile",
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
      icon: "i-tabler-school",
    },
    {
      label: "Guardian",
      link: "/guardian/guardians",
      icon: "i-tabler-user-shield",
    },
    {
      label: "Profile",
      link: "/guardian/guardians/profile",
      icon: "i-tabler-user-circle",
    },
  ];

  let [menu, setMenu] = useState(menuDefault);

  useEffect(() => {
    const updateMenu = () => {
      let newMenu = [];
      let link = location.pathname;
      let icon = "";

      let pathz = location.pathname.split("/");

      if (pathz[1] == "admin") {
        if (pathz.length > 3) {
          newMenu[0] = {
            label: "Back",
            link: `/${pathz[1]}/${pathz[2]}`,
            icon: "i-tabler-arrow-back-up",
          };

          if (pathz[2] == "teachers") {
            icon = "i-tabler-user-edit";
            if (link === "/admin/teachers/add") newMenu[1] = { label: "Create Teacher", link, icon };
            else if (link === "/admin/teachers/details") newMenu[1] = { label: "View Teachers Details", link, icon };
            else if (link === "/admin/teachers/update") newMenu[1] = { label: "Teacher Update", link, icon };
            else if (link === "/admin/teachers/search") newMenu[1] = { label: "Teachers Search", link, icon };
          } else if (pathz[2] == "students") {
            icon = "i-tabler-school";
            if (link === "/admin/students/add") newMenu[1] = { label: "Create Student", link, icon };
            else if (link === "/admin/students/details") newMenu[1] = { label: "View Students Details", link, icon };
            else if (link === "/admin/students/update") newMenu[1] = { label: "Student Update", link, icon };
            else if (link === "/admin/students/search") newMenu[1] = { label: "Students Search", link, icon };
          } else if (pathz[2] == "profile") {
            icon = "i-tabler-user-circle";
            if (link === "/admin/profile/add") newMenu[1] = { label: "Representative", link, icon };
            else if (link === "/admin/profile/institution") newMenu[1] = { label: "Institution", link, icon };
          } else if (pathz[2] == "attendance") {
            icon = "i-tabler-arrow-back-up";
            if (link.startsWith("/admin/attendance/")) newMenu[1] = { label: "Attendance", link, icon };
            // else if (link === "/admin/attendance/institution") newMenu[1] = { label: "Institution", link, icon };
          }
        } else {
          newMenu = menuDefault;
        }
      } else if (location.pathname.startsWith("/teacher/")) {
        newMenu = menuTeacher;
      } else if (location.pathname.startsWith("/guardian/")) {
        if (location.pathname === "/guardian/guardians/create") {
          newMenu = [
            {
              label: "Back",
              link: "/guardian/guardians",
              icon: "i-tabler-arrow-back-up",
            },
            {
              label: "Create Guardian",
              link: "/guardian/guardians/create",
              icon: "i-tabler-user-plus",
            },
          ];
        } else {
          newMenu = menuGuardian;
        }
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
