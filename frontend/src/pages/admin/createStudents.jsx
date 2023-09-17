import React from "react";

const CreateStudents = () => {
    return ( 
        <main className="flex items-center flex-col px-10% py-10">
            <section className="mb-5 flex items-center justify-center flex-col">
                <div className="flex items-center justify-between">
                    <div className="i-tabler-user-circle flex items-center justify-between text-40"></div>
                </div>
                <button className="btn">Upload Image</button>
            </section>

            <form action="" className="grid grid-cols-2 gap-4 w-full items-center">
                <div className="w-100%">
                    <label htmlFor="">First Name</label><br />
                    <input type="text"className="my-input" /><br /><br />

                    <label htmlFor="">Class</label><br />
                    <input type="text" className="my-input"/><br /><br />

                    <label htmlFor="">Guardian First Name</label><br />
                    <input type="text" className="my-input"/><br /><br />

                    <label htmlFor="">Guardian Relationship</label><br />
                    <input type="text" className="my-input"/><br /><br />

                </div>

                <div className="w-100%">
                    <label htmlFor="">Last Name</label><br />
                    <input type="text" className="my-input"/><br /><br />

                    <div className="flex justify-between my-4">
                        <div>
                        <p className="mb-2">Gender</p>
                        <input type="radio" name="gender" className="mr-1"/><label htmlFor="" className="mr-4">Male</label>
                        <input type="radio" name="gender" className="mr-1"/><label htmlFor="" >Female</label>
                        </div>
                        <div>
                        <p className="mb-2">Status</p>
                        <input type="radio" name="status" className="mr-1"/><label htmlFor="" className="mr-4">Active</label>
                        <input type="radio" name="status" className="mr-1"/><label htmlFor="">Inactive</label>
                        </div>
                    </div>

                    <label htmlFor="">Guardian Last Name</label><br />
                    <input type="text" className="my-input"/><br /><br />

                    <label htmlFor="">Guardian Email</label><br />
                    <input type="email" className="my-input"/><br /><br />

                </div>

                <div className="col-span-2 flex justify-center">
                    <button className="btn">Create</button>
                </div>
            </form>
        </main>
     );
}
 
export default CreateStudents;