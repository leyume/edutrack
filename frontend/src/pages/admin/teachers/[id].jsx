import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { teachersData, classesData, mutateX } from "~/components/Query";

export default function UpdateTeacher() {
  let { id } = useParams();
  const [teacher, setTeacher] = useState({});
  const { data: teachers } = teachersData();
  const { data: classes } = classesData();
  console.log({ teacher, classes });

  useEffect(() => {
    if (teachers?.length) {
      let tt = teachers.filter((t) => t.id == id);
      if (tt?.length) setTeacher(tt[0]);
    }
  }, [teachers]);

  const { mutate, data, isLoading } = mutateX("teachers", "teachers", "PUT");

  const formHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    console.log({ formData });

    await mutate(formData);
    // setLoading(false);
  };

  const [msg, setMsg] = useState(false);
  const [err, setErr] = useState(true);

  useEffect(() => {
    if (data?.detail) {
      setErr(true);
      setMsg(data?.detail);
    } else {
      setErr(false);
      setMsg(data?.message);
    }
  }, [data]);

  return (
    <div className=" px-10">
      {/* <section className="mb-5 flex items-center justify-center flex-col">
        <div className="flex items-center justify-between">
          <img className="w-30 mb-4" src="/images/teacher.png" alt="img" />
        </div>
        <button className="btn">Change Image</button>
      </section> */}

      {!!teacher?.id && (
        <div className="rounded-full bg-brand-blue h-20 w-20 text-3xl flex items-center justify-center text-white mx-auto mb-10">
          {teacher.firstname[0]}
          {teacher.lastname[0]}
        </div>
      )}

      {!!msg && <div className={"msg mt-1 " + (err ? "error" : "success")}>{msg}</div>}

      {!!teacher?.id && (
        <form
          className="grid grid-cols-2 gap-4 px-10% pb-24 pt-6
            [&_label]:grid [&_label.flex]:flex [&_label]:gap-2 [&_label_input]:p-2.5 
            [&_label]:text-sm [&_label_input]:rounded-md [&_label_input]:outline-none 
            [&_label_input]:border-solid [&_label_input]:border-1 [&_label_input]:border-gray-300
            [&_label_select]:p-2.5 [&_label_select]:rounded-md [&_label_select]:outline-none 
            [&_label_select]:border-solid [&_label_select]:border-1 [&_label_select]:border-gray-300"
          onSubmit={formHandler}
        >
          <input type="hidden" name="id" defaultValue={teacher.id} />

          <label>
            First Name
            <input type="text" name="firstname" defaultValue={teacher.firstname} />
          </label>

          <label>
            Last Name
            <input type="text" name="lastname" defaultValue={teacher.lastname} />
          </label>

          <label>
            Class
            <input type="text" name="class_name" defaultValue={teacher.teacher_class[0]?.name} />
          </label>

          <label>
            Subject
            <input type="text" name="subject_name" defaultValue={teacher.teacher_subjects[0]?.name} />
          </label>

          <div className="pt-4 col-span-2 flex gap-4 justify-center">
            <button className="btn">{!isLoading ? <>Update</> : <div className="i-svg-spinners-ring-resize"></div>}</button>
          </div>
        </form>
      )}
    </div>
  );
}
