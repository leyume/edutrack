import React from "react";
import { Link } from "react-router-dom";

const Guardians = () => {
    return ( 
        <main className="grid gap-4 px-10 mb-10">
            <section className="grid grid-cols-2">
                <div className="bg-brand-blue rounded-tl-2 rounded-bl-2  grid text-white p-5 gap-4">
                <h1>Guardians</h1>
                <p>Let’s keep in track with your Institution Details.</p>
                </div>

                <div className="bg-brand-orange rounded-tr-2 rounded-br-2 p-5 grid grid-cols-2 gap-4 place-items-center text-center">
                <h1>Want To Add New <br /> Guardian?</h1>
                <Link to="/guardian/createGuardian" className="btn">Create</Link>
                </div>
            </section>

            <section className="grid grid-cols-2 gap-6">
                <div className="bg-brand-liteorange p-5 grid gap-2 rounded-2">
                    <div className="flex flex-col items-end">
                        <button 
                        className="bg-brand-blue py-1 px-2 outline-none border-none text-white text-4 rounded-1 cursor-pointer"
                        >
                        <span className="i-tabler-star-filled inline-block text-brand-pink"></span>Principal</button>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                    <img className="w-30 mb-4" src="/images/guardian.png" alt="img" />
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-2">
                        <p><b>First Name:</b> <span>Frank</span></p>
                        <p><b>Last Name:</b> <span>Jace</span></p>
                        <p><b>Gender:</b> <span>Male</span></p>
                        <p><b>Relationship:</b> <span>Father</span></p>
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-8">
                        <Link to="/guardian/guardianProfile" className="btn">Profile</Link>
                        <button className="btn">Delete</button>
                    </div>
                </div>

                <div className="bg-brand-liteorange p-5 grid gap-2 rounded-2">
                    <div className="flex flex-col items-end">
                        <button 
                        className="bg-gray py-1 px-2 outline-none border-none text-white text-4 rounded-1 cursor-pointer"
                        >
                        <span className="i-tabler-star-filled inline-block text-white"></span>Principal</button>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                    <img className="w-30 mb-4" src="/images/guardian2.png" alt="img" />
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-2">
                        <p><b>First Name:</b> <span>Frank</span></p>
                        <p><b>Last Name:</b> <span>Mercy</span></p>
                        <p><b>Gender:</b> <span>Female</span></p>
                        <p><b>Relationship:</b> <span>Mother</span></p>
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-8">
                        <Link to="" className="btn">Profile</Link>
                        <button className="btn">Delete</button>
                    </div>
                </div>

                <div className="bg-brand-liteorange p-5 grid gap-2 rounded-2">
                    <div className="flex flex-col items-end">
                        <button 
                        className="bg-gray py-1 px-2 outline-none border-none text-white text-4 rounded-1 cursor-pointer"
                        >
                        <span className="i-tabler-star-filled inline-block text-white"></span>Principal</button>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                    <img className="w-30 mb-4" src="/images/guardian3.png" alt="img" />
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-2">
                        <p><b>First Name:</b> <span>John</span></p>
                        <p><b>Last Name:</b> <span>Martha</span></p>
                        <p><b>Gender:</b> <span>Female</span></p>
                        <p><b>Relationship:</b> <span>House Help</span></p>
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-8">
                        <Link to="" className="btn">Profile</Link>
                        <button className="btn">Delete</button>
                    </div>
                </div>

                <div className="bg-brand-liteorange p-5 grid gap-2 rounded-2">
                    <div className="flex flex-col items-end">
                        <button 
                        className="bg-gray py-1 px-2 outline-none border-none text-white text-4 rounded-1 cursor-pointer"
                        >
                        <span className="i-tabler-star-filled inline-block text-white"></span>Principal</button>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                    <img className="w-30 mb-4" src="/images/guardian4.png" alt="img" />
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-2">
                        <p><b>First Name:</b> <span>Kelvin</span></p>
                        <p><b>Last Name:</b> <span>Ken</span></p>
                        <p><b>Gender:</b> <span>Male</span></p>
                        <p><b>Relationship:</b> <span>Driver</span></p>
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-8">
                        <Link to="" className="btn">Profile</Link>
                        <button className="btn">Delete</button>
                    </div>
                </div>
        
            </section>

        </main>
     );
}

export default Guardians;