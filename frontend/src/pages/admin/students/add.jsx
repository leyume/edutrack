import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { classesData, mutateX } from "~/components/Query";
import PageLabel from "~/components/PageLabel";

export default function AddStudent() {
  const navigate = useNavigate();
  const { data: classes } = classesData();
  const { mutate, data, isLoading } = mutateX("students", "students");

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
      setTimeout(() => navigate("/admin/students/search"), 1500);
    }
  }, [data]);

  return (
    <main className="px-10">
      <PageLabel title="Create New Student" details="Let’s keep in track with your Institution Details." />

      {/* <section className="mb-5 flex items-center justify-center flex-col">
        <div className="flex items-center justify-between">
          <div className="i-tabler-user-circle flex items-center justify-between text-40"></div>
        </div>
        <button className="btn">Upload Image</button>
      </section> */}

      {!!msg && <div className={"msg mt-1 " + (err ? "error" : "success")}>{msg}</div>}

      <form
        className="grid grid-cols-2 gap-4 px-10% pb-24 pt-6
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
          Class
          <select name="class_id">
            <option value=""></option>
            {classes?.map((c, i) => (
              <option key={i} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <div />

        {/* <label>
            Subject
            <input type="text" name="subject_name" defaultValue={student.teacher_subjects[0]?.name} />
          </label> */}

        <label>
          Guardian First Name
          <input type="text" name="guardian_fname" />
        </label>

        <label>
          Guardian Last Name
          <input type="text" name="guardian_lname" />
        </label>
        <label>
          Guardian Relationship
          <input type="text" name="guardian_relation" />
        </label>

        <label>
          Guardian Email
          <input type="text" name="guardian_email" />
        </label>

        <div className="pt-4 col-span-2 flex gap-4 justify-center">
          <button className="btn">{!isLoading ? <>Update</> : <div className="i-svg-spinners-ring-resize"></div>}</button>
        </div>
      </form>
    </main>
  );
}
