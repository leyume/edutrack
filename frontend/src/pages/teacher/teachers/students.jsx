import React from "react";

function Students() {
  return (
    <>
      <main className="px-5% ">
            <section className="bg-brand-blue rounded-2 grid text-white p-5 gap-4">
              <h1>Students</h1>
              <p>Let’s keep in track with your Institution Details.</p>
            </section>

        <div className="p-7">
          <div className="flex items-center justify-between mb-5">
          <input type="search" placeholder="Search for student by name" className="my-input"/> <button className="btn ml-4">Search</button>
          </div>
    
          <table className="w-full text-left my-3">
              <thead className="text-4">
                  <tr>
                  <th>S/N</th>
                  <th>NAME</th>
                  <th>CLASS</th>
                  </tr>
              </thead>
              <tbody className="text-4">
                  <tr>
                      <td>1</td>
                      <td>Philip Mary</td>
                      <td>SS 3</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Dimaku Jane</td>
                      <td>SS 3</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>Jude Micheal</td>
                      <td>SS 3</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>Emmanuel Mmadu</td>
                      <td>SS 3</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>Mercy Christopher</td>
                      <td>SS 3</td>
                  </tr>
                  <tr>
                      <td>6</td>
                      <td>Miracle Igwemmadu</td>
                      <td>SS 3</td>
                  </tr>
                  <tr>
                      <td>7</td>
                      <td>Frank Mary</td>
                      <td>SS 3</td>
                  </tr>
              </tbody>
          </table>
      </div>
      </main>
    </>
  );
}

export default Students;
