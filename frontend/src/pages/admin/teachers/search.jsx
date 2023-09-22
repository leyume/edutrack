import { useState } from "react";
import { Link } from "react-router-dom";
import PageLabel from "~/components/PageLabel";
import { teachersData, classesData } from "~/components/Query";

export default function SearchTeacher() {
  const [search, setSearch] = useState("");
  const { data: teachers } = teachersData();
  const { data: classes } = classesData();
  console.log({ teachers, classes });

  const searcher = () => teachers.filter((t) => (t.firstname + " " + t.lastname).toLowerCase().includes(search.toLowerCase())).reverse();

  return (
    <div className="px-10">
      <PageLabel title="Update Teachers Info" details="Let’s keep in track with your Institution Details." />

      <section className="px-10% mb-8 mt-6">
        <input type="search" className="my-input" placeholder="Search for teachers by name" onChange={(e) => setSearch(e.target.value)} />
      </section>

      {teachers?.length && (
        <section className="px-10% pb-20">
          {searcher().map((t, i) => (
            <div key={i} className="flex items-center mb-4 gap-4">
              <div className="rounded-full bg-brand-blue h-10 w-10 flex items-center justify-center text-white">
                {t.firstname[0]}
                {t.lastname[0]}
              </div>
              <div className="flex-grow">
                {t.firstname} {t.lastname}
                <div className="text-xs text-brand-pink">
                  {t.teacher_class[0]?.name} {t.teacher_subjects[0]?.name && t.teacher_class[0]?.name ? ", " : ""} {t.teacher_subjects[0]?.name}
                </div>
              </div>

              <Link to={"/admin/teachers/" + t.id} className="text-brand-blue underline">
                Update
              </Link>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
