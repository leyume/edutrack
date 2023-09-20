import React from "react";
import { Link } from "react-router-dom";
import PageLabel from "~/components/PageLabel";
import { userData } from "~/components/Query";

export default function Profile() {
  const { data: user, isSuccess, isError } = userData();

  return (
    isSuccess &&
    user?.institution?.name && (
      <div className="px-6">
        <PageLabel title="Profile" details="Let’s keep in track with your Institution Details." />

        <section className="grid grid-cols-2 gap-6 mt-6 mb-12">
          <div className="bg-brand-litepink p-8 grid gap-4 rounded-2">
            <div className="flex justify-between">
              <h2>Representative</h2>
              <Link to="/admin/profile/rep" className="block i-tabler-edit text-2xl" />
            </div>
            <div className="text-center leading-8">
              <img className="rounded-full w-40" src="/images/image-11.jpeg" alt="img" />
              <h2>{user.firstname + " " + user.lastname}</h2>
              <p>{user.email}</p>
            </div>
          </div>

          <div className="grid bg-brand-blue text-white rounded-2 overflow-hidden">
            <img className="h-60 col-span-2 w-full object-cover" src="/images/institute.jpeg" alt="img" />

            <div className="p-8 leading-6">
              <div className="flex justify-between gap-6 items-center mb-1">
                <h3>St. Charles Royal Academy</h3>
                <Link to="/admin/profile/institution" className="block i-tabler-edit text-2xl" />
              </div>
              <p className="opacity-50">Plot 165 Downtown Toronto Canada.</p>
              <p className="">stcharlesroyalacademy@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    )
  );
}
