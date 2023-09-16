import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signOut } from "../config";
import fetchAPI from "../utils/fetchAPI";

import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function HeaderInternal() {
  let navigate = useNavigate();

  let queryClient = useQueryClient();

  const { data, isSuccess, isError } = useQuery({ queryKey: ["user"], queryFn: async () => await fetchAPI("user") });
  // const { data, isSuccess } = { data: {}, isSuccess: false };

  const logout = async () => {
    await signOut(auth);
    await localStorage.removeItem("token");
    queryClient.invalidateQueries();
    // let q = await queryClient.invalidateQueries({ queryKey: ["user"] });
    navigate("/");
  };

  return (
    <header className="flex items-center justify-end gap-20px mt-20px mr-8 mb-6">
      {isSuccess && data?.institution?.name && <h3>{data.institution.name}</h3>}
      <img src="/images/image-11.jpeg" alt="img"className="w-10" />
      <a onClick={logout}>
        <img src="/images/vector-1.jpeg" alt="img" className="w-8"/>
      </a>
    </header>
  );
}
