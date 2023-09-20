import React from "react";

function InstituteProfile() {
  return (
    <>
      <main className="px-5% ">
            <section className="bg-brand-blue rounded-2 grid text-white p-5 gap-4">
              <h1>Institution Profile</h1>
              <p>Let’s keep in track with your Institution Details.</p>
            </section>

            <section className="flex items-center flex-col bg-#F8EFE2 px-5 py-5  my-5 rounded-2">
            <div className="mb-5 flex items-center justify-center flex-col">
                <div className="flex items-center justify-between">
                <img className="w-30 mb-4" src="/images/institute.png" alt="img" />
                </div>
                <button className="btn">Change Image</button>
            </div>

            <form action="" className="grid grid-cols-2 gap-4 w-full items-center">
                <div className="w-100%">
                    <label htmlFor="" >Instituion Name</label><br />
                    <input type="text"
                    className="my-input"
                    value="St. Charles Royal Academy"
                    disabled
                     /><br /><br />

                    <label htmlFor="" >Instituion Email</label><br />
                    <input type="email" 
                    className="my-input"
                    value="stcharlesroyalacademy@gmail.com"
                    disabled
                    /><br /><br />
                </div>

                <div className="w-100%">
                    <label htmlFor="" >Instituion Location</label><br />
                    <input type="text" 
                    className="my-input"
                    value="Willson"
                    disabled
                    /><br /><br />

                    <label htmlFor="" >Institution Representative</label><br />
                    <input type="text" 
                    className="my-input"
                    value="Tabitha Wilson"
                    disabled
                    /><br /><br />
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

export default InstituteProfile;
