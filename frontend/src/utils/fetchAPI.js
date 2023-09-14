let BaseURL = import.meta.env.BASE_URL;

export default async function api(endpoint, method = "GET") {
  try {
    let token = localStorage.getItem("token");

    if (token) {
      // Post/GET to API
      let action = {
        // body: upload ? data : JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + token,
        },
        method,
      };

      let data = await fetch(BaseURL + endpoint, action);
      let res = await data.json();
      console.log({ res });
      return res;
    }
    // return {};
    throw "Some error";
  } catch (error) {
    console.log({ error });
  }
}
