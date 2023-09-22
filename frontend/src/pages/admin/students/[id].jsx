import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { studentsData, classesData, mutateX } from "~/components/Query";

export default function UpdateStudent() {
  let { id } = useParams();
  const [student, setTeacher] = useState({});
  const { data: students } = studentsData();
  const { data: classes } = classesData();
  console.log({ student, classes });

  useEffect(() => {
    if (students?.length) {
      let tt = students.filter((t) => t.id == id);
      if (tt?.length) setTeacher(tt[0]);
    }
  }, [students]);

  const { mutate, data, isLoading } = mutateX("students", "students", "PUT");

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
          <img className="w-30 mb-4" src="/images/student.png" alt="img" />
        </div>
        <button className="btn">Change Image</button>
      </section> */}

      {!!student?.id && (
        <div className="rounded-full bg-brand-blue h-20 w-20 text-3xl flex items-center justify-center text-white mx-auto mb-10">
          {student.firstname[0]}
          {student.lastname[0]}
        </div>
      )}

      {!!msg && <div className={"msg mt-1 " + (err ? "error" : "success")}>{msg}</div>}

      {!!student?.id && (
        <form
          className="grid grid-cols-2 gap-4 px-10% pb-24 pt-6
            [&_label]:grid [&_label.flex]:flex [&_label]:gap-2 [&_label_input]:p-2.5 
            [&_label]:text-sm [&_label_input]:rounded-md [&_label_input]:outline-none 
            [&_label_input]:border-solid [&_label_input]:border-1 [&_label_input]:border-gray-300
            [&_label_select]:p-2.5 [&_label_select]:rounded-md [&_label_select]:outline-none 
            [&_label_select]:border-solid [&_label_select]:border-1 [&_label_select]:border-gray-300"
          onSubmit={formHandler}
        >
          <input type="hidden" name="student_id" defaultValue={student.id} />

          <label>
            First Name
            <input type="text" name="firstname" defaultValue={student.firstname} />
          </label>

          <label>
            Last Name
            <input type="text" name="lastname" defaultValue={student.lastname} />
          </label>

          <label>
            Class
            {/* <input type="text" name="class_name" defaultValue={student.classes[0]?.name} /> */}
            <select name="class_id" defaultValue={student.classes[0]?.id}>
              <option value=""></option>
              {classes?.map((c, i) => (
                <option key={i} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Subject
            {/* <input type="text" name="subject_name" defaultValue={student.teacher_subjects[0]?.name} /> */}
          </label>

          <label>
            Guardian First Name
            <input type="text" name="guardian_fname" defaultValue={student.guardians[0]?.firstname} />
          </label>

          <label>
            Guardian Last Name
            <input type="text" name="guardian_lname" defaultValue={student.guardians[0]?.lastname} />
          </label>
          <label>
            Guardian Relationship
            <input type="text" name="guardian_relation" defaultValue={student.guardians[0]?.relation} />
          </label>

          <label>
            Guardian Email
            <input type="text" name="guardian_email" defaultValue={student.guardians[0]?.email} />
          </label>

          <div className="pt-4 col-span-2 flex gap-4 justify-center">
            <button className="btn">{!isLoading ? <>Update</> : <div className="i-svg-spinners-ring-resize"></div>}</button>
          </div>
        </form>
      )}
    </div>
  );
}
