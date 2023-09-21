import { useState } from "react";
import { Link } from "react-router-dom";
import PageLabel from "~/components/PageLabel";
import { studentsData, classesData } from "~/components/Query";

export default function SearchStudent() {
  const [search, setSearch] = useState("");
  const { data: students } = studentsData();
  const { data: classes } = classesData();
  console.log({ students, classes });

  const searcher = () => students.filter((t) => (t.firstname + " " + t.lastname).toLowerCase().includes(search.toLowerCase())).reverse();

  return (
    <div className="px-10">
      <PageLabel title="Update students Info" details="Let’s keep in track with your Institution Details." />

      <section className="px-10% mb-8 mt-6">
        <input type="search" className="my-input" placeholder="Search for students by name" onChange={(e) => setSearch(e.target.value)} />
      </section>

      {students?.length && (
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
                  {t.classes[0]?.name}
                  {t.classes[0]?.teacher?.firstname ? "(" + t.classes[0]?.teacher?.firstname + " " + t.classes[0]?.teacher?.lastname + ")" : ""}
                </div>
              </div>

              <Link to={"/admin/students/" + t.id} className="text-brand-blue underline">
                Update
              </Link>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
