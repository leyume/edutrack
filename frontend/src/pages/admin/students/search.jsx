import React from "react";
import { Link } from "react-router-dom";

const SearchStudent = () => {
    return ( 
        <section className="px-10%">
            <div className="flex items-center flex-col gap-2 text-center w-full px-10% mb-4">
                <h2>Update Students Info</h2>
                <p>Let’s keep in track with your <br />Institution Details</p>
                <input type="search" className="my-input" placeholder="Search for student by name"/>
            </div>

            <section>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center justify-center">
                    <img className="w-8 mr-2" src="/images/student.png" alt="img" />
                    <p>Egesionu Charles Obimnaeto</p>
                    </div>

                    <Link className="text-brand-blue underline">Update</Link>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center justify-center">
                    <img className="w-8 mr-2" src="/images/student.png" alt="img" />
                    <p>Egesionu Charles Obimnaeto</p>
                    </div>

                    <Link className="text-brand-blue underline">Update</Link>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center justify-center">
                    <img className="w-8 mr-2" src="/images/student.png" alt="img" />
                    <p>Egesionu Charles Obimnaeto</p>
                    </div>

                    <Link className="text-brand-blue underline">Update</Link>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center justify-center">
                    <img className="w-8 mr-2" src="/images/student.png" alt="img" />
                    <p>Egesionu Charles Obimnaeto</p>
                    </div>

                    <Link className="text-brand-blue underline">Update</Link>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center justify-center">
                    <img className="w-8 mr-2" src="/images/student.png" alt="img" />
                    <p>Egesionu Charles Obimnaeto</p>
                    </div>

                    <Link className="text-brand-blue underline">Update</Link>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center justify-center">
                    <img className="w-8 mr-2" src="/images/student.png" alt="img" />
                    <p>Egesionu Charles Obimnaeto</p>
                    </div>

                    <Link className="text-brand-blue underline">Update</Link>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="flex items-center justify-center">
                    <img className="w-8 mr-2" src="/images/student.png" alt="img" />
                    <p>Egesionu Charles Obimnaeto</p>
                    </div>

                    <Link className="text-brand-blue underline">Update</Link>
                </div>
            </section>
        </section>
     );
}
 
export default SearchStudent;