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
      icon: "i-tabler-layout-dashboard",
    },
    {
      label: "Attendance",
      link: "/admin/attendance",
      icon: "i-tabler-layout-dashboard",
    },
    {
      label: "Profile",
      link: "/admin/profile",
      icon: "i-tabler-layout-dashboard",
    },
  ];

  let menuTeacher = [
    {
      label: "Dashboard",
      link: "/teachers/dashboard",
      icon: "i-tabler-layout-dashboard",
    },
    {
      label: "Manage Teachers",
      link: "/teachers/teachers",
      icon: "i-tabler-user-edit",
    },
  ];

  let [menu, setMenu] = useState(menuDefault);

  useEffect(() => {
    if (location.pathname == "/admin/students/add") {
      let menuNew = [
        {
          label: "Back",
          link: "/admin/students",
          icon: "i-tabler-arrow-back-up",
        },
        {
          label: "Create Students",
          link: "/admin/students/add",
          icon: "i-tabler-layout-dashboard",
        },
      ];
      setMenu(menuNew);
    } else if (location.pathname.slice(0, 10) == "/teachers/") {
      setMenu(menuTeacher);
    } else {
      setMenu(menuDefault);
    }
  }, [location]);

  return (
    <aside className="bg-#E5E2EA w-60 p-6 fixed h-screen top-0">
      <Link to="/" className="text-brand-pink text-4xl font-bold">
        Edu<span className="text-brand-blue">Track</span>
      </Link>
      <nav className="[&>ul>li:hover]:bg-#2375F0 [&>ul>li>:hover]:text-white [&>ul>li>a]:text-dark-900 [&>ul>li>a]:flex [&>ul>li>a]:gap-2 [&>ul>li]:rounded-2 [&>ul>li>a]:p-15px mt-30px text-black">
        <ul className="list-none">
          {menu.map((m) => (
            <li>
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
