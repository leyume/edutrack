import signupbg from "/images/signup.png";
import fetchAPI from "~/utils/fetchAPI";
import { auth, signInWithEmailAndPassword } from "../config";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    // console.log({ formData });
    let { email, password } = formData;

    let data = await fetchAPI("register", "POST", { ...formData });

    if (data?.message.includes("successfully created")) {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          await localStorage.setItem("token", user.accessToken);
          navigate("/admin/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error({ errorCode, errorMessage });
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <main className="w-full grid grid-cols-2 items-center justify-between">
      <form
        className="grid gap-4 px-10% pb-24 pt-6
            [&_label]:grid [&_label.flex]:flex [&_label]:gap-2 [&_label_input]:p-2.5 
            [&_label]:text-sm [&_label_input]:rounded-md [&_label_input]:outline-none 
            [&_label_input]:border-solid [&_label_input]:border-1 [&_label_input]:border-gray-300"
        onSubmit={registerHandler}
      >
        <h1>Sign Up As An Institute</h1>
        <p className="-mt-2 text-sm italic opacity-50">Institutions are only allowed to sign up. Parents and teachers are registered by the institutions.</p>

        <label>
          Institution Name
          <input type="text" name="institution_name" />
        </label>

        <label>
          Institution Location
          <input type="text" name="institution_location" />
        </label>

        <label>
          Representative Name
          <div className="grid grid-cols-2 gap-6">
            <input type="text" name="firstname" placeholder="First Name" />
            <input type="text" name="lastname" placeholder="Last Name" />
          </div>
        </label>

        <div className="grid grid-cols-2 gap-6">
          <label>
            Representative Email
            <input type="text" name="email" />
          </label>

          <label>
            Password
            <input type="password" name="password" />
          </label>

          <label>
            Representative Phone
            <input type="text" name="phone" />
          </label>
        </div>

        <label className="flex">
          <input type="checkbox" />
          By signing up you agree to our
          <a className="decoration-underline">terms and conditions</a>
        </label>

        <div className="pt-4">
          <button className="btn">{!loading ? <>Sign Up</> : <div className="i-svg-spinners-ring-resize"></div>}</button>
        </div>
      </form>

      <div className="relative h-[calc(100vh-75px)]">
        <img src={signupbg} alt="" className="w-full object-cover h-full" />
        <div className="absolute top-0 flex flex-col justify-between text-white pt-6 text-center w-full h-full">
          <h1 className="flex-start text-5xl shadow">
            Elevate Your
            <br /> Institution
          </h1>
          <h3 className="flex-end text-2xl pb-10 shadow">
            Join Our School Education <br />
            Tracking System Now!
          </h3>
        </div>
      </div>
    </main>
  );
}
