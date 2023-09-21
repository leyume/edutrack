import { useState } from "react";
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

          await auth.currentUser
            .getIdTokenResult()
            .then((idTokenResult) => {
              // Confirm the user is an Admin.
              let role = "";
              if (idTokenResult.claims.role === 0 || user.email == "etjohn@yopmail.com") role = "admin";
              else if (idTokenResult.claims.role === 1) role = "teacher";
              else if (idTokenResult.claims.role === 3 || user.email == "sandra@yopmail.com") role = "guardian";

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
        setLoading(false);
      });
  };

  return (
    <main className="w-full grid grid-cols-2 items-center justify-between">
      <div className="relative h-[calc(100vh-75px)]">
        <img src={signbg} alt="" className="w-full object-cover h-full" />
        <div className="absolute top-0 flex flex-col justify-between text-white w-full h-full">
          <h1 className="flex-start text-center text-40px shadow">
            Hi, <br /> Welcome Back
          </h1>
          <h3 className="flex-end text-center text-24px shadow">
            Don't miss Out. <br />
            Sign in now to stay updated and on track.
          </h3>
        </div>
      </div>

      <form
        className="grid gap-4 px-10% pb-24 pt-6
            [&_label]:grid [&_label.flex]:flex [&_label]:gap-2 [&_label_input]:p-2.5 
            [&_label]:text-sm [&_label_input]:rounded-md [&_label_input]:outline-none 
            [&_label_input]:border-solid [&_label_input]:border-1 [&_label_input]:border-gray-300"
        onSubmit={loginHandler}
      >
        <h1>Sign In</h1>
        <label>
          Email Address
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <Link to="/" className="decoration-underline text-right">
          Forget your password?
        </Link>

        <div>
          <button className="btn">{!loading ? <>Sign Up</> : <div className="i-svg-spinners-ring-resize"></div>}</button>
        </div>
      </form>
    </main>
  );
}
