import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { teachersData, classesData, mutateX } from "~/components/Query";
import PageLabel from "~/components/PageLabel";

export default function AddTeacher() {
  const navigate = useNavigate();
  const { mutate, data, isLoading } = mutateX("teachers", "teachers");

  const formHandler = async (e) => {
    e.preventDefault();
    setMsg("");

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    // console.log({ formData });
    await mutate(formData);
  };

  const [msg, setMsg] = useState(false);
  const [err, setErr] = useState(true);

  useEffect(() => {
    if (data?.detail) {
      setErr(true);
      setMsg(data?.detail);
    } else if (data?.id) {
      setErr(false);
      data?.message ? setMsg(data?.message) : setMsg("Successfully created");
      setTimeout(() => navigate("/admin/teachers/search"), 1500);
    }
  }, [data]);

  return (
    <main className="px-10">
      <PageLabel title="Create New Teacher" details="Let’s keep in track with your Institution Details." />

      {/* <section className="mb-5 flex items-center justify-center flex-col">
        <div className="flex items-center justify-between">
          <div className="i-tabler-user-circle flex items-center justify-between text-40"></div>
        </div>
        <button className="btn">Upload Image</button>
      </section> */}

      {!!msg && <div className={"msg mt-1 " + (err ? "error" : "success")}>{msg}</div>}

      <form
        className="grid grid-cols-2 gap-y-4 gap-x-10 px-10% pb-24 pt-10
            [&_label]:grid [&_label.flex]:flex [&_label]:gap-2 [&_label_input]:p-2.5 
            [&_label]:text-sm [&_label_input]:rounded-md [&_label_input]:outline-none 
            [&_label_input]:border-solid [&_label_input]:border-1 [&_label_input]:border-gray-300
            [&_label_select]:p-2.5 [&_label_select]:rounded-md [&_label_select]:outline-none 
            [&_label_select]:border-solid [&_label_select]:border-1 [&_label_select]:border-gray-300"
        onSubmit={formHandler}
      >
        <label>
          First Name
          <input type="text" name="firstname" />
        </label>

        <label>
          Last Name
          <input type="text" name="lastname" />
        </label>

        <label>
          Email
          <input type="text" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <label>
          Phone
          <input type="text" name="phone" />
        </label>

        <div />

        <label>
          Class
          <input type="text" name="class_name" />
        </label>

        <label>
          Subject
          <input type="text" name="subject_name" />
        </label>

        <div className="pt-4 col-span-2 flex gap-4 justify-center">
          <button className="btn">{!isLoading ? <>Create</> : <div className="i-svg-spinners-ring-resize"></div>}</button>
        </div>
      </form>
    </main>
  );
}
