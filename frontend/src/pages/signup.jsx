import signupbg from "/images/signup.png";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="w-full">
      <header className="flex item-center justify-between px-5% py-15px shadow-lg">
        <Link to="/" className="text-brand-pink text-4xl font-bold">
          Edu<span className="text-brand-blue">Track</span>
        </Link>

        <nav className="flex items-center justify-center">
          <p className="text-center">Already have an account?</p>
          <a href="" className="btn ml-4">Sign In</a>
        </nav>
      </header>

    <main className="w-full flex flex-row justify-between">

      <form className="w-1/2 flex flex-col mx-5%">
        <h1 className="mt-30px mb-20px">Sign Up As An Institute</h1>
        <p className="mb-20px">Institutions are only allowed to sign up. <br />Parents and teachers are registered by the institutions.</p>
        <label htmlFor="" className="mb-10px">Institution Name</label>
        <input 
          type="text"
          className="p-2.5 rounded-md outline-none border border-#00000040 mb-20px" 
          />
        <label htmlFor="" className="mb-10px">Institution Location</label>
        <input 
          type="text"
          className="p-2.5 rounded-md outline-none border border-#00000040 mb-20px" 
          />
        <label htmlFor="" className="mb-10px">Institution  Email</label>
        <input 
          type="email"
          className="p-2.5 rounded-md outline-none border border-#00000040 mb-20px" 
          />
        <label htmlFor="" className="mb-10px">Representative Name</label>
        <input 
          type="text"
          className="p-2.5 rounded-md outline-none border border-#00000040 mb-20px" 
          />
        <div className="flex justify-between align-center w-100%">
        <div className="w-1/2">
        <label htmlFor="" className="mb-10px ">Representative Email</label><br />
        <input 
          type="email"
          className="p-2.5 rounded-md outline-none border border-#00000040 mb-20px w-full" 
          />
        </div>
        <div className="w-1/2 ml-20px">
        <label htmlFor="" className="mb-20px">Password</label><br />
        <input 
          type="password"
          className="p-2.5 rounded-md outline-none border border-#00000040 mb-10px  w-full"
          />
        </div>
        </div>
        <div className="self-end">
        <input type="checkbox" /><label htmlFor="" className="ml-5px">By signing up you agree to our <a href=""className=" decoration-underline">terms and conditions</a></label>
        </div>

        <button className="btn w-25%">Sign Up</button>
      </form>

      <div className="w-1/2 relative ">
        <img src={signupbg} alt="" className="w-full h-full" />
        <div className="absolute top-0 flex flex-col justify-between text-#fff w-full h-full py-10%">
          <h1 className="flex-start text-center text-40px shadow">Elevate Your<br /> Institution</h1>
          <h3 className="flex-end text-center text-24px shadow">Join Our School Education  <br />Tracking System Now!</h3>
        </div>
      </div> 
      </main>
    </div>
  );
}