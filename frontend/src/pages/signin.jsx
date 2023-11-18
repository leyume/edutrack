import { useState, useEffect } from "react";
import signbg from "/images/sign-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../config";
// import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function Signin() {
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    let { email, password } = formData;

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        if (userCredential) {
          const user = userCredential.user;
          await localStorage.setItem("token", user.accessToken);
          // console.log({ user });
          setErr(false);
          setMsg("Login Successful");

          await auth.currentUser
            .getIdTokenResult()
            .then((idTokenResult) => {
              // Confirm the user is an Admin.
              let role = "";
              if (
                idTokenResult.claims.role === 0 ||
                user.email == "etjohn@yopmail.com"
              )
                role = "admin";
              else if (idTokenResult.claims.role === 1) role = "teacher";
              else if (
                idTokenResult.claims.role === 3 ||
                user.email == "sandra@yopmail.com"
              )
                role = "guardian";

              if (role) navigate("/" + role + "/dashboard");
            })
            .catch((error) => {
              console.log(error);
            });
        } else setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error({ errorCode, errorMessage });
        setErr(true);
        setMsg(errorMessage);
        setLoading(false);
      });
  };

  const [msg, setMsg] = useState(false);
  const [err, setErr] = useState(true);

  return (
    <main className="relative top-18 grid grid-cols-1 md:grid-cols-2 items-center justify-between">
      <div className="relative h-[calc(100vh-74px)] hidden md:flex">
        <img src={signbg} alt="" className="w-full object-cover h-full" />
        <div className="absolute top-0 flex flex-col justify-between text-white w-full h-full">
          <h1 className="flex-start text-center text-40px text-shadow">
            Hi, <br /> Welcome Back
          </h1>
          <h3 className="flex-end text-center text-24px text-shadow">
            Don't miss Out. <br />
            Sign in now to stay updated and on track.
          </h3>
        </div>
      </div>

      <form
        className="w-full grid gap-4 px-10% pb-24 pt-6
            [&_label]:grid [&_label.flex]:flex [&_label]:gap-2 [&_label_input]:p-2.5 
            [&_label]:text-sm [&_label_input]:rounded-md [&_label_input]:outline-none 
            [&_label_input]:border-solid [&_label_input]:border-1 [&_label_input]:border-gray-300"
        onSubmit={loginHandler}
      >
        <h1>Sign In</h1>
        {!!msg && (
          <div className={"msg mt-1 " + (err ? "error" : "success")}>{msg}</div>
        )}

        <label>
          Email Address
          <input type="text" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <Link to="/" className="decoration-underline text-right">
          Forget your password?
        </Link>

        <div>
          <button className="btn">
            {!loading ? (
              <>Sign In</>
            ) : (
              <div className="i-svg-spinners-ring-resize"></div>
            )}
          </button>
        </div>
      </form>
    </main>
  );
}
