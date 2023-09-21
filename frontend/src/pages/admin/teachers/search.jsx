import React from "react";
import { Link } from "react-router-dom";
import PageLabel from "~/components/PageLabel";
import { teachersData, mutateX } from "~/components/Query";

const SearchTeacher = () => {
  const { data: teachers } = teachersData();
  console.log({ teachers });
  return (
    <div className="px-10">
      <PageLabel title="Update Teachers Info" details="Let’s keep in track with your Institution Details." />

      <section className="px-10% mb-8 mt-6">
        <input type="search" className="my-input" placeholder="Search for teachers by name" />
      </section>

      {teachers?.length && (
        <section className="px-10% pb-20">
          {teachers.map((t, i) => (
            <div key={i} className="flex items-center mb-4">
              <img className="w-8 mr-2" src="/images/teacher.png" alt="img" />
              <p className="flex-grow">
                {t.firstname} {t.lastname}
              </p>

              <Link to={"/admin/teachers/" + t.id} className="text-brand-blue underline">
                Update
              </Link>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default SearchTeacher;
