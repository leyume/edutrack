import signbg from "/images/sign-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../config";

import { useEffect } from "react";

export default function Signin() {
  let navigate = useNavigate();

  // import { BaseURL } from "../config";

  const loginHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    let { email, password } = formData;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user.accessToken);
        localStorage.setItem("token", user.accessToken);
        navigate("/admin/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error({ errorCode, errorMessage });
      });
  };

  return (
    <main className="w-full grid grid-cols-2 items-center justify-between">
      <div className="relative h-[calc(100vh-75px)] ">
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

      <form className="grid gap-4 px-10% pb-24" onSubmit={loginHandler}>
        <h1 className="">Sign In</h1>
        <label className="grid gap-2">
          Email Address
          <input type="text" name="email" className="p-2.5 rounded-md outline-none border border-#00000040" />
        </label>
        <label className="grid gap-2">
          Password
          <input type="password" name="password" className="p-2.5 rounded-md outline-none border border-#00000040" />
        </label>
        <a href="" className="decoration-underline text-right">
          Forget your password?
        </a>

        <div>
          <button className="btn">Sign In</button>
        </div>
      </form>
    </main>
  );
}
