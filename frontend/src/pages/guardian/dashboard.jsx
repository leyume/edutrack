import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return ( 
    <main className="px-10 grid gap-6">  
        <section className="grid grid-cols-2">
            <div className="h-70 p-5 text-white bg-brand-blue letter-spacing tracking- rounded-tl-2 rounded-bl-2">
                <h1 className="text-10 mb-2">Hello <br /> <span>Frank</span>,</h1>
                <h3 className="text-5 my-2">St. Charles Royal Academy</h3>
                <p className="text-3.5 text-gray-200 mb-1">Plot 165 Downtown Toronto Canada.</p>
                <p className="text-3 mb-6">stcharlesroyalacademy@gmail.com</p>
                <p>Let’s keep in track with your Institution Details</p>
            </div>
            <div className="h-70">
            <img className="h-full w-full" src="/images/image-12.jpeg" alt="img" />
            </div>
        </section>

        <section className="grid grid-cols-3 items-center text-center justify-center gap-6 [&>div]:h-35 [&>div]:py-6 [&>div]:bg-brand-orange [&>div]:rounded-2 [&>div>h1]:text-7xl">
                <div>
                    <h4>Total Wards</h4>
                    <h1>4</h1>
                </div>
                <div>
                    <h4>Total Guardian</h4>
                    <h1>4</h1>
                </div>
                <div className="grid grid-cols-1 place-items-center">
                    <h3 className="text-6 text-center">Need A New Guardian?</h3>
                    <Link to="/guardian/guardians/create" className="btn">Create</Link>
                </div>
            </section>

        <section className="w-full flex justify-between gap-6 mb-5">
                <div className="bg-brand-litepink p-7 grid grid-cols-1 w-2/4 gap-4 rounded-2">
                    <div className="flex items-center justify-between">
                        <h1>Guardian</h1>
                        <Link to="/guardian/guardians/profile" className="i-tabler-edit"></Link>
                    </div>

                    <div className="grid grid-cols-1 place-items-center">
                    <img className="w-30 mb-4" src="/images/guardian.png" alt="img" />
                    </div>

                    <div className="grid grid-cols-1 place-items-center gap-2">
                        <h1>Mr. Frank Jace</h1>
                        <p>frankjace@gmail.com</p>
                    </div>
                </div>

                <div className="w-4/4 bg-brand-liteorange p-7 rounded-2">
                    <h3>Activities</h3>

                    <table className="w-full text-left my-3">
                        <thead className="text-4 text-#84868A">
                            <tr>
                            <th>S/N</th>
                            <th>WARDS</th>
                            <th>DROP</th>
                            <th>PICKUP</th>
                            </tr>
                        </thead>
                        <tbody className="text-4">
                            <tr>
                                <td>1</td>
                                <td>Frank Mary</td>
                                <td>8:00AM</td>
                                <td>4:00PM</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Frank Mary</td>
                                <td>8:00AM</td>
                                <td>4:00PM</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Frank Mary</td>
                                <td>8:00AM</td>
                                <td>4:00PM</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Frank Mary</td>
                                <td>8:00AM</td>
                                <td>4:00PM</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Frank Mary</td>
                                <td>8:00AM</td>
                                <td>4:00PM</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Frank Mary</td>
                                <td>8:00AM</td>
                                <td>4:00PM</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Frank Mary</td>
                                <td>8:00AM</td>
                                <td>4:00PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </section>

    </main>
     );
}
 
export default Dashboard;