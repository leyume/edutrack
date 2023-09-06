import signbg from "/images/sign-bg.png";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="w-full">
      <header className="flex item-center justify-between px-5% py-15px shadow-lg">
        <Link to="/" className="text-brand-pink text-4xl font-bold">
          Edu<span className="text-brand-blue">Track</span>
        </Link>

        <nav className="flex items-center justify-center">
          <p className="text-center">Don’t have an account?</p>
          <a href="" className="btn ml-4">
            Sign Up
          </a>
        </nav>
      </header>

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

        <form className="grid gap-4 px-10% pb-24">
          <h1 className="">Sign In</h1>
          <label className="grid gap-2">
            Email Address
            <input
              type="text"
              className="p-2.5 rounded-md outline-none border border-#00000040"
            />
          </label>
          <label className="grid gap-2">
            Password
            <input
              type="password"
              className="p-2.5 rounded-md outline-none border border-#00000040"
            />
          </label>
          <a href="" className="decoration-underline text-right">
            Forget your password?
          </a>

          <button className="btn w-25%">Sign In</button>
        </form>
      </main>
    </div>
  );
}
