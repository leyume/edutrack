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
<<<<<<< HEAD
    <header className="flex items-center justify-end gap-3 mt-5 ml-60 mb-6 px-10">
      {isSuccess && data?.institution?.name && (
        <div>
          <h5>{data.firstname + " " + data.lastname}</h5>
          <div className="text-xs">{data.institution.name}</div>
        </div>
      )}
      <img src="/images/image-11.jpeg" alt="img" className="w-10" />
      <a onClick={logout} className="i-tabler-caret-down-filled text-2xl inline-block" />
=======
    <header className="flex items-center justify-end gap-20px mt-20px mr-8 mb-6">
      {isSuccess && data?.institution?.name && <h3>{data.institution.name}</h3>}
      <img src="/images/image-11.jpeg" alt="img"className="w-10" />
      <a onClick={logout}>
        <img src="/images/vector-1.jpeg" alt="img" className="w-8"/>
      </a>
>>>>>>> 98cfe28 (resfresh footer, sidebar and headerinternal)
    </header>
  );
}
