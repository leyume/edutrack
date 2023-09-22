import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLabel from "~/components/PageLabel";
import { teachersData, classesData } from "~/components/Query";

const Details = ({ id }) => {
  const [teacher, setTeacher] = useState({});

  const { data: teachers } = teachersData();

  useEffect(() => {
    if (teachers?.length) {
      setTeacher({});
      let tt = teachers.filter((t) => t.id == id);
      if (tt?.length) setTeacher(tt[0]);
    }
  }, [teachers, id]);

  return (
    !!teacher?.id && (
      <div className="px-4">
        <div className="rounded-full bg-brand-blue h-20 w-20 text-3xl flex items-center justify-center text-white mx-auto mb-10">
          {teacher.firstname[0]}
          {teacher.lastname[0]}
        </div>

        <section className="">
          <div className="grid grid-cols-2 gap-6 text-lg leading-none">
            <div className="col-span-2">
              <b className="text-sm opacity-50">Name:</b>
              <div>
                {teacher.firstname} {teacher.lastname}
              </div>
            </div>
            <div>
              <b className="text-sm opacity-50">Email:</b>
              <div className="text-base">{teacher.email}</div>
            </div>

            <div>
              <b className="text-sm opacity-50">Phone:</b>
              <div>{teacher.phone}</div>
            </div>

            <div>
              <b className="text-sm opacity-50">Class:</b>
              <div>{teacher.teacher_class[0]?.name}</div>
            </div>

            <div>
              <b className="text-sm opacity-50">Subject:</b>
              <div>{teacher.teacher_subjects[0]?.name}</div>
            </div>

            <div className="col-span-2 mt-4">
              <Link to={"/admin/teachers/" + teacher.id} className="btn">
                Edit
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default function TeacherDetails() {
  const [id, setID] = useState("");
  const [search, setSearch] = useState("");
  const { data: teachers } = teachersData();
  const { data: classes } = classesData();
  // console.log({ teachers, classes });

  const searcher = () => teachers.filter((t) => (t.firstname + " " + t.lastname).toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="px-10">
      <PageLabel title="All Teachers Info" details="Let’s keep in track with your Institution Details." />

      <section className="px-10% mb-8 mt-6">
        <input type="search" className="my-input" placeholder="Search for teachers by name" onChange={(e) => setSearch(e.target.value)} />
      </section>

      {teachers?.length && (
        <section className={"pb-20 grid gap-6 px-10% " + (id ? "grid-cols-3" : "")}>
          <div className={"grid " + (id ? "gap-1" : "gap-6 grid-cols-3")}>
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
                      {t.teacher_class[0]?.name} {t.teacher_subjects[0]?.name && t.teacher_class[0]?.name ? ", " : ""} {t.teacher_subjects[0]?.name}
                    </div>
                  )}
                </div>

                {/* <a className="text-brand-blue underline text-sm">See Detail</a> */}
              </a>
            ))}
          </div>

          {!!id && (
            <div className="col-span-2 b b-solid b-gray-300 p-6 rounded-lg">
              <Details id={id} />
            </div>
          )}
        </section>
      )}
    </div>
  );
}
