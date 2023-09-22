import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PageLabel from "~/components/PageLabel";
import { studentsData, classesData } from "~/components/Query";

const SDetails = ({ id }) => {
  const [student, setStudent] = useState({});

  const { data: students } = studentsData();

  useEffect(() => {
    if (students?.length) {
      setStudent({});
      let tt = students.filter((t) => t.id == id);
      if (tt?.length) setStudent(tt[0]);
    }
  }, [students, id]);

  return (
    !!student?.id && (
      <div className="px-4">
        <div className="rounded-full bg-brand-blue h-16 w-16 text-2xl flex items-center justify-center text-white mx-auto mb-4">
          {student.firstname[0]}
          {student.lastname[0]}
        </div>

        <section className="">
          <div className="grid grid-cols-2 gap-3 gap-x-8 text-md leading-none">
            <div className="col-span-2">
              <b className="text-sm opacity-50">Name:</b>
              <div>
                {student.firstname} {student.lastname}
              </div>
            </div>
            <div>
              <b className="text-sm opacity-50">Email:</b>
              <div className="text-sm">{student.email}</div>
            </div>

            <div>
              <b className="text-sm opacity-50">Phone:</b>
              <div>{student.phone}</div>
            </div>

            <div>
              <b className="text-sm opacity-50">Class:</b>
              <div>{student.classes[0]?.name}</div>
            </div>

            <div>
              <b className="text-sm opacity-50">Teacher:</b>
              <div>
                {student.classes[0]?.teacher?.firstname} {student.classes[0]?.teacher?.lastname}
              </div>
            </div>

            <div className="col-span-2 mt-4 text-brand-pink">Guardian</div>
            {student.guardians?.map((g, i) => (
              <Fragment key={i}>
                <div>
                  <b className="text-sm opacity-50">Name:</b>
                  <div>
                    {g.firstname} {g.lastname}
                  </div>
                </div>
                <div>
                  <b className="text-sm opacity-50">Relationship:</b>
                  <div>{g.relation}</div>
                </div>
              </Fragment>
            ))}

            {/* <div>
              <b className="text-sm opacity-50">Subject:</b>
              <div>{student.teacher_subjects[0]?.name}</div>
            </div> */}

            <div className="col-span-2 py-6">
              <Link to={"/admin/students/" + student.id} className="btn">
                Edit
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default function StudentDetails() {
  const [id, setID] = useState("");
  const [search, setSearch] = useState("");
  const { data: students } = studentsData();
  const { data: classes } = classesData();
  console.log({ students, classes });

  const searcher = () => students.filter((t) => (t.firstname + " " + t.lastname).toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="px-10">
      <PageLabel title="All Students Info" details="Let’s keep in track with your Institution Details." />

      <section className="px-10% mb-8 mt-6">
        <input type="search" className="my-input" placeholder="Search for students by name" onChange={(e) => setSearch(e.target.value)} />
      </section>

      {!!students?.length && (
        <section className={"pb-20 grid gap-6 px-10% " + (id ? "grid-cols-3" : "")}>
          <div className={" " + (id ? "flex flex-col gap-1" : "grid gap-6 grid-cols-3")}>
            {searcher().map((t, i) => (
              <a
                key={i}
                onClick={() => setID(t.id)}
                className={
                  (id ? "p-1 flex gap-2 items-center" : "b b-solid b-gray-300  p-4") +
                  " rounded-lg hover:bg-brand-liteorange hover:b-orange-300 transition-all duration-500"
                }
              >
                <div className="rounded-full bg-brand-blue h-10 w-10 flex items-center justify-center text-white">
                  {t.firstname[0]}
                  {t.lastname[0]}
                </div>
                <div className={id ? "text-sm" : "mt-4"}>
                  {t.firstname} {t.lastname}
                  {!id && (
                    <div className="text-xs text-brand-pink">
                      {t.classes[0]?.name}{" "}
                      {t.classes[0]?.teacher?.firstname ? "(" + t.classes[0]?.teacher?.firstname + " " + t.classes[0]?.teacher?.lastname + ")" : ""}
                    </div>
                  )}
                </div>

                {/* <a className="text-brand-blue underline text-sm">See Detail</a> */}
              </a>
            ))}
          </div>

          {!!id && (
            <div className="col-span-2 b b-solid b-gray-300 p-6 rounded-lg">
              <SDetails id={id} />
            </div>
          )}
        </section>
      )}
    </div>
  );
}
