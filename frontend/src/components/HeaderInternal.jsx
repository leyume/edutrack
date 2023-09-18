import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signOut } from "~/config";
import { userQ } from "~/utils/queries";

import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function HeaderInternal() {
  let navigate = useNavigate();

  let queryClient = useQueryClient();

  const { data, isSuccess, isError } = useQuery(userQ);

  const logout = async () => {
    await signOut(auth);
    await localStorage.removeItem("token");
    queryClient.removeQueries("user");
    navigate("/");
  };

  return (
    <header className="flex items-center justify-end gap-3 mt-20px mr-8 mb-6">
      {isSuccess && data?.institution?.name && <h3>{data.institution.name}</h3>}
      <img src="/images/image-11.jpeg" alt="img" className="w-10" />
      <a
        onClick={logout}
        className="i-tabler-caret-down-filled text-2xl inline-block"
      />
    </header>
  );
}
