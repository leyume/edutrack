import React from "react";
import { Link } from "react-router-dom";

const Wards = () => {
    return ( 
        <main className="grid gap-4 px-10">
            <section className="bg-brand-blue rounded-2 grid text-white p-5 gap-4">
              <h1>Wards</h1>
              <p>Let’s keep in track with your Institution Details.</p>
            </section>

            <section className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-brand-liteorange p-5 grid gap-2 rounded-2">
                    <div className="flex flex-col items-end">
                        <button 
                        className="w-40 bg-brand-blue p-1 outline-none border-none text-white text-4 rounded-tl-1 rounded-tr-1 cursor-pointer"
                        >
                        <span className="i-tabler-star-filled inline-block text-brand-pink"></span>Change Guardian</button>
                        <h4 className="w-40 bg-brand-orange p-1 outline-none border-none text-4 text-center rounded-bl-1 rounded-br-1">Frank Jace</h4>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                    <img className="w-30 mb-4" src="/images/ward.png" alt="img" />
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-2">
                        <p><b>First Name:</b> <span>Frank</span></p>
                        <p><b>Last Name:</b> <span>Micheal</span></p>
                        <p><b>Gender:</b> <span>Male</span></p>
                        <p><b>Class:</b> <span>JSS 1</span></p>
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-8">
                        <button className="btn">Subjects</button>
                        <button className="btn">Attendance</button>
                    </div>
                </div>

                <div className="bg-brand-liteorange p-5 grid gap-2 rounded-2">
                    <div className="flex flex-col items-end">
                        <button 
                        className="w-40 bg-brand-blue p-1 outline-none border-none text-white text-4 rounded-tl-1 rounded-tr-1 cursor-pointer"
                        >
                        <span className="i-tabler-star-filled inline-block text-brand-pink"></span>Change Guardian</button>
                        <h4 className="w-40 bg-brand-orange p-1 outline-none border-none text-4 text-center rounded-bl-1 rounded-br-1">Frank Jace</h4>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                    <img className="w-30 mb-4" src="/images/ward.png" alt="img" />
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-2">
                        <p><b>First Name:</b> <span>Frank</span></p>
                        <p><b>Last Name:</b> <span>Micheal</span></p>
                        <p><b>Gender:</b> <span>Male</span></p>
                        <p><b>Class:</b> <span>JSS 1</span></p>
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-8">
                        <button className="btn">Subjects</button>
                        <button className="btn">Attendance</button>
                    </div>
                </div>

                <div className="bg-brand-liteorange p-5 grid gap-2 rounded-2">
                    <div className="flex flex-col items-end">
                        <button 
                        className="w-40 bg-brand-blue p-1 outline-none border-none text-white text-4 rounded-tl-1 rounded-tr-1 cursor-pointer"
                        >
                        <span className="i-tabler-star-filled inline-block text-brand-pink"></span>Change Guardian</button>
                        <h4 className="w-40 bg-brand-orange p-1 outline-none border-none text-4 text-center rounded-bl-1 rounded-br-1">Frank Jace</h4>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                    <img className="w-30 mb-4" src="/images/ward.png" alt="img" />
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-2">
                        <p><b>First Name:</b> <span>Frank</span></p>
                        <p><b>Last Name:</b> <span>Micheal</span></p>
                        <p><b>Gender:</b> <span>Male</span></p>
                        <p><b>Class:</b> <span>JSS 1</span></p>
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-8">
                        <button className="btn">Subjects</button>
                        <button className="btn">Attendance</button>
                    </div>
                </div>

                <div className="bg-brand-liteorange p-5 grid gap-2 rounded-2">
                    <div className="flex flex-col items-end">
                        <button 
                        className="w-40 bg-brand-blue p-1 outline-none border-none text-white text-4 rounded-tl-1 rounded-tr-1 cursor-pointer"
                        >
                        <span className="i-tabler-star-filled inline-block text-brand-pink"></span>Change Guardian</button>
                        <h4 className="w-40 bg-brand-orange p-1 outline-none border-none text-4 text-center rounded-bl-1 rounded-br-1">Frank Jace</h4>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                    <img className="w-30 mb-4" src="/images/ward.png" alt="img" />
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-2">
                        <p><b>First Name:</b> <span>Frank</span></p>
                        <p><b>Last Name:</b> <span>Micheal</span></p>
                        <p><b>Gender:</b> <span>Male</span></p>
                        <p><b>Class:</b> <span>JSS 1</span></p>
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-8">
                        <button className="btn">Subjects</button>
                        <button className="btn">Attendance</button>
                    </div>
                </div>
            </section>

        </main>
     );
}
 
export default Wards;