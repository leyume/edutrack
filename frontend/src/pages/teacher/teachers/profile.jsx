import React from "react";

function Profile() {
  return (
    <>
      <main className="px-5% ">
            <section className="bg-brand-blue rounded-2 grid text-white p-5 gap-4">
              <h1>Teachers Profile</h1>
              <p>Let’s keep in track with your Institution Details.</p>
            </section>

        <section className="flex items-center flex-col bg-#F8EFE2 px-5 py-5  my-5 rounded-2">
            <div className="mb-5 flex items-center justify-center flex-col">
                <div className="flex items-center justify-between">
                    <img className="w-30 mb-4" src="/images/teacher2.png" alt="img" />
                </div>
                <button className="btn">Change Image</button>
            </div>

            <form action="" className="grid grid-cols-2 gap-4 w-full items-center">
                <div className="w-100%">
                    <label htmlFor="" >First Name</label><br />
                    <input type="text"
                    className="my-input"
                    value="Ann"
                    disabled
                     /><br /><br />

                    <label htmlFor="" >Email</label><br />
                    <input type="email" 
                    className="my-input"
                    value="annphilip@gmail.com"
                    disabled
                    /><br /><br />

                    <label htmlFor="" >Subject</label><br />
                    <input type="text" 
                    className="my-input"
                    value="Biology"
                    disabled
                    /><br /><br />
                </div>

                <div className="w-100%">
                    <label htmlFor="" >Last Name</label><br />
                    <input type="text" 
                    className="my-input"
                    value="Philip"
                    disabled
                    /><br /><br />

                    <label htmlFor="" >Class</label><br />
                    <input type="text" 
                    className="my-input"
                    value="SS 3"
                    disabled
                    /><br /><br />

                    <div className="flex justify-between my-4">
                        <div>
                        <p className="mb-1">Gender</p>
                        <input type="radio" name="gender" className="mr-2" disabled/><label htmlFor="" className="mr-4">Male</label>
                        <input type="radio" name="gender" className="mr-2" checked/><label htmlFor="" >Female</label>
                        </div>
                        <div>
                        </div>
                    </div>

                </div>

                <div className="col-span-2 flex justify-center gap-4">
                    <button className="btn">Edit</button>
                    <button className="btn">Update</button>
                </div>
            </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
