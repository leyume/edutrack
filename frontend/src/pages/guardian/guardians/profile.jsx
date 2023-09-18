import React from "react";

function GuardianProfile() {
  return (
    <>
      <main className="px-5% ">
            <section className="bg-brand-blue rounded-2 grid text-white p-5 gap-4">
              <h1>Guardian Profile</h1>
              <p>Let’s keep in track with your Institution Details.</p>
            </section>

        <section className="flex items-center flex-col bg-#F8EFE2 px-5 py-5  my-5 rounded-2">
            <div className="mb-5 flex items-center justify-center flex-col">
                <div className="flex items-center justify-between">
                    <img className="w-30 mb-4" src="/images/guardian.png" alt="img" />
                </div>
                <button className="btn">Change Image</button>
            </div>

            <form action="" className="grid grid-cols-2 gap-4 w-full items-center">
                <div className="w-100%">
                    <label htmlFor="" >First Name</label><br />
                    <input type="text"
                    className="my-input"
                    value="Frank"
                    disabled
                     /><br /><br />

                    <label htmlFor="" >Email</label><br />
                    <input type="email" 
                    className="my-input"
                    value="frankjace@gmail.com"
                    disabled
                    /><br /><br />

                    <div>
                        <p className="mb-1">Principal Guardian</p>
                        <input type="radio" name="guardian" className="mr-2" checked/><label htmlFor="" className="mr-4">True</label>
                        <input type="radio" name="guardian" className="mr-2" disabled/><label htmlFor="">False</label>
                    </div>
                </div>

                <div className="w-100%">
                    <label htmlFor="" >Last Name</label><br />
                    <input type="text" 
                    className="my-input"
                    value="Jace"
                    disabled
                    /><br /><br />

                    <label htmlFor="" >Role</label><br />
                    <input type="text" 
                    className="my-input"
                    value="Father"
                    disabled
                    /><br /><br />

                    <div>
                        <p className="mb-1">Principal Guardian</p>
                        <input type="radio" name="gender" className="mr-2" checked/><label htmlFor="" className="mr-4">Male</label>
                        <input type="radio" name="gender" className="mr-2"disabled /><label htmlFor="" >Female</label>
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

export default GuardianProfile;
