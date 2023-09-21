import React from "react";

const UpdateStudents = () => {
  return (
    <main className="flex items-center flex-col px-10% mb-10">
      <section className="mb-5 flex items-center justify-center flex-col">
        <div className="flex items-center justify-between">
          <img className="w-30 mb-4" src="/images/teacher.png" alt="img" />
        </div>
        <button className="btn">Change Image</button>
      </section>

      <form action="" className="grid grid-cols-2 gap-4 w-full items-center">
        <div className="w-100%">
          <label htmlFor="">First Name</label>
          <br />
          <input type="text" className="my-input" value="Janefrancis Nginika" disabled />
          <br />
          <br />

          <label htmlFor="">Class</label>
          <br />
          <input type="text" value="SS 3" className="my-input" disabled />
          <br />
          <br />

          <label htmlFor="">Role</label>
          <br />
          <input type="text" className="my-input" value="Form Master" disabled />
          <br />
          <br />
        </div>

        <div className="w-100%">
          <label htmlFor="">Last Name</label>
          <br />
          <input type="text" className="my-input" value="Dimaku" disabled />
          <br />
          <br />

          <label htmlFor="">Subject</label>
          <br />
          <input type="text" className="my-input" value="Computer Science" disabled />
          <br />
          <br />

          <div className="flex justify-between my-4">
            <div>
              <p className="mb-2">Gender</p>
              <input type="radio" name="gender" className="mr-1" disabled />
              <label htmlFor="" className="mr-4">
                Male
              </label>
              <input type="radio" name="gender" className="mr-1" checked />
              <label htmlFor="">Female</label>
            </div>
            <div>
              <p className="mb-2">Status</p>
              <input type="radio" name="status" className="mr-1" checked />
              <label htmlFor="" className="mr-4">
                Active
              </label>
              <input type="radio" name="status" className="mr-1" disabled />
              <label htmlFor="">Inactive</label>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex justify-center gap-4">
          <button className="btn">Edit</button>
          <button className="btn">Update</button>
        </div>
      </form>
    </main>
  );
};

export default UpdateStudents;
