import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import fetchAPI from "~/utils/fetchAPI";

export const institutionsData = () => useQuery({ queryKey: ["institutions"], queryFn: async () => await fetchAPI("institutions") });
export const userData = () => useQuery({ queryKey: ["user"], queryFn: async () => await fetchAPI("user") });
export const teachersData = () => useQuery({ queryKey: ["teachers"], queryFn: async () => await fetchAPI("teachers") });
export const studentsData = () => useQuery({ queryKey: ["students"], queryFn: async () => await fetchAPI("students") });
export const guardiansData = () => useQuery({ queryKey: ["guardians"], queryFn: async () => await fetchAPI("guardians") });
export const classesData = () => useQuery({ queryKey: ["classes"], queryFn: async () => await fetchAPI("classes") });
export const attendanceData = () => useQuery({ queryKey: ["attendance"], queryFn: async () => await fetchAPI("attendance") });
export const subjectsData = () => useQuery({ queryKey: ["subjects"], queryFn: async () => await fetchAPI("subjects") });

// export const { data, mutate, isLoading, isError, error, isSuccess } = useMutation({
export const mutateX = (endpoint, key = "", method = "POST") => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      let data_ = await fetchAPI(endpoint, method, { ...data });
      console.log({ data_ });
      return data_;
    },
    onSuccess: (result) => {
      console.log("Successfully Mutated", result);
      if (key) queryClient.invalidateQueries({ queryKey: [key] });
      if (key != "user") queryClient.invalidateQueries({ queryKey: "user" });
    },
    onError: (e) => {
      console.log({ e });
    },
  });
};

export default function Query() {
  return <></>;
}
