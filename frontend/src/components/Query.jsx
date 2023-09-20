import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import fetchAPI from "~/utils/fetchAPI";

export const userData = () => useQuery({ queryKey: ["user"], queryFn: async () => await fetchAPI("user") });
export const teachersData = () => useQuery({ queryKey: ["teachers"], queryFn: async () => await fetchAPI("teachers") });
export const studentsData = () => useQuery({ queryKey: ["students"], queryFn: async () => await fetchAPI("students") });
export const guardiansData = () => useQuery({ queryKey: ["guardians"], queryFn: async () => await fetchAPI("guardians") });

// export const { data, mutate, isLoading, isError, error, isSuccess } = useMutation({
export const mutateX = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      let data_ = await fetchAPI("user", "PUT", { ...data });
      console.log({ data_ });
      return data_;
    },
    onSuccess: (result) => {
      console.log("Profile Update Success", result);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (e) => {
      console.log({ e });
    },
  });
};

export default function Query() {
  return <></>;
}
