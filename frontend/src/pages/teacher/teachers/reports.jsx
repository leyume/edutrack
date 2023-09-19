import React from "react";

function Reports() {
  return (
    <>
      <main className="px-5% ">
            <section className="bg-brand-blue rounded-2 grid text-white p-5 gap-4">
              <h1>Teachers Report</h1>
              <p>Let’s keep in track with your Institution Details.</p>
            </section>

            <section className="w-4/4 bg-brand-liteorange p-7 my-5 rounded-2">
                <div className="my-5">
                    <h4 className="text-center  text-5 mb-4">Fill the form below to update your report</h4>
                    <div className="grid grid-cols-4 gap-2 place-items-center">
                        <label htmlFor="">Date
                        <input type="date" className="my-input"/>
                        </label>
                        <label htmlFor="">Time of Arrival
                        <input type="time" className="my-input"/>
                        </label>
                        <label htmlFor="">Time of Departure
                        <input type="time" className="my-input"/>
                        </label>
                        
                        <div>
                        <button className="btn">Add Report</button>
                        </div>
                    </div>
                </div>
                <h3 className="text-6">Report Details</h3>
    
                <table className="w-full text-left my-3">
                    <thead className="text-4">
                        <tr>
                        <th>Date</th>
                        <th>Arrival</th>
                        <th>Departure</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-4">
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <td>07-09-2023</td>
                            <td>8:30AM</td>
                            <td>5:00PM</td>
                            <td>Active</td>
                        </tr>
                        
                    </tbody>
                </table>
            </section>

        </main>
    </>
  );
}

export default Reports;
