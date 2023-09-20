export { default as fetchAPI } from "./fetchAPI";
// export { default as q } from "./queries";

export const role = (id) => {
  let roles = ["admin", "teacher", "student", "guardian"];
  return roles[id];
};
