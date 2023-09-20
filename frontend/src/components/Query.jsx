import { useQuery } from "@tanstack/react-query";
import fetchAPI from "~/utils/fetchAPI";

export const userData = () => useQuery({ queryKey: ["user"], queryFn: async () => await fetchAPI("user") });
export const teachersData = () => useQuery({ queryKey: ["teachers"], queryFn: async () => await fetchAPI("teachers") });
export const studentsData = () => useQuery({ queryKey: ["students"], queryFn: async () => await fetchAPI("students") });
export const guardiansData = () => useQuery({ queryKey: ["guardians"], queryFn: async () => await fetchAPI("guardians") });

export default function Query() {
  return <></>;
}
