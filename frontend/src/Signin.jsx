import signbg from "./images/sign-bg.png"

function Signin() {
  return (
    <div className="w-full">
      <header className="flex item-center justify-between px-5% py-15px shadow-lg">
        <a href="" className="text-#2375F0 text-40px font-extrabold">
          Edu<span className="text-#F41E92">Track</span>
        </a>

        <nav className="flex items-center justify-center">
          <p className="text-center">Don’t have an account?</p>
          <a href="" className="btn px-24px py-16px bg-#2375F0 rounded-lg text-#fff font-medium ml-4">Sign Up</a>
        </nav>
      </header>

    <main className="w-full flex flex-row items-center justify-between">
      <div className="w-1/2 relative">
        <img src={signbg} alt="" className="w-full h-screen" />
        <div className="absolute top-0 flex flex-col justify-between text-#fff w-full h-screen py-10% px-5%">
          <h1 className="flex-start text-center text-40px shadow">Hi, <br /> Welcome Back</h1>
          <h3 className="flex-end text-center text-24px shadow">Don't miss Out. <br />Sign in now to stay updated and on track.</h3>
        </div>
      </div>  

      <form className="w-1/2 flex flex-col m-5%">
        <h1 className="mb-30px">Sign In</h1>
        <label htmlFor="" className="mb-10px">Email Address</label>
        <input 
          type="text"
          className="p-2.5 rounded-md outline-none border border-#00000040 mb-20px" 
          />
        <label htmlFor="" className="mb-10px">Password</label>
        <input 
          type="password"
          className="p-2.5 rounded-md outline-none border border-#00000040 mb-10px"
          />
        <a href="" className="self-end decoration-underline">Forget your password?</a>

        <button className="btn px-24px py-16px bg-#2375F0 rounded-lg text-#fff text-18px font-medium  w-20% outline-none mt-20px">Sign In</button>

      </form>
      </main>
    </div>
  );
}

export default Signin;
