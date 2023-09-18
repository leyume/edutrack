import fetchAPI from "./fetchAPI";

export const userQ = { queryKey: ["user"], queryFn: async () => await fetchAPI("user") };

export default {
  userQ: { queryKey: ["user"], queryFn: async () => await fetchAPI("user") },
};
