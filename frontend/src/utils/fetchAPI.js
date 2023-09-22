let BaseURL = import.meta.env.VITE_BASE_URL;
import { auth, signOut } from "~/config";

export default async function api(endpoint, method = "GET", data, upload = false) {
  try {
    let token = localStorage.getItem("token");

    if (token || endpoint === "register") {
      // Post/GET to API
      let action = { headers: {}, method };
      if (endpoint != "register") action.headers.Authorization = "Bearer " + token;
      if (method != "GET") action.body = upload ? data : JSON.stringify(data);
      if (!upload) action.headers["Content-Type"] = "application/json";

      let rdata = await fetch(BaseURL + endpoint, action);
      let res = await rdata.json();
      // console.log({ res });
      if (res?.details == "Invalid Authorisation") {
        await signOut(auth);
        throw new Error(res?.details);
      }
      return res;
    }
    throw new Error("Some Error...");
  } catch (error) {
    console.log({ error });
  }
}
