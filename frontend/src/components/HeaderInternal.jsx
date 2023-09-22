import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signOut } from "~/config";
import { userData } from "~/components/Query";
import { useQueryClient } from "@tanstack/react-query";

export default function HeaderInternal() {
  let navigate = useNavigate();
  let queryClient = useQueryClient();
  const { data, isSuccess, isError } = userData();

  const logout = async () => {
    await signOut(auth);
    await localStorage.removeItem("token");
    queryClient.removeQueries();
    navigate("/");
  };

  return (
    <header className="flex items-center justify-end relative gap-3 mt-5 md:ml-60 mb-6 px-10">
      <b className="absolute left-10 top-0 text-3xl text-brand-blue md:hidden">
        <span className=" text-brand-pink">E</span>T
      </b>
      {isSuccess && data?.institution?.name && (
        <Link to="/admin/profile" className="flex gap-3 items-center text-black">
          <div>
            <h5>{data.firstname + " " + data.lastname}</h5>
            <div className="text-xs">{data.institution.name}</div>
          </div>
          {/* <img src="/images/image-11.jpeg" alt="img" className="w-10 rounded-full" /> */}
          <div className="rounded-full bg-brand-blue h-10 w-10 text-lg flex items-center justify-center text-white">
            {data.firstname[0]}
            {data.lastname[0]}
          </div>
        </Link>
      )}
      <a onClick={logout} className="i-tabler-power text-red-600 text-2xl inline-block" />
      {/* <a onClick={logout} className="i-tabler-caret-down-filled text-2xl inline-block" /> */}
    </header>
  );
}
