import React from "react";

function Students() {
  return (
    <>
      <main className="px-5% ">
            <section className="bg-brand-blue rounded-2 grid text-white p-5 gap-4">
              <h1>Classes</h1>
              <p>Let’s keep in track with your Institution Details.</p>
            </section>

            <section className="grid grid-cols-2 gap-5 py-5">
                <div className="grid grid-cols-2 h-50">
                    <div className="grid grid-cols-1 place-items-center p-5 bg-brand-orange rounded-lt-2 rounded-lb-2">
                        <h3 className="text-5">Class Assigned</h3>
                        <h1 className="text-8">1</h1>
                    </div>
                    <div className="grid grid-cols-1 place-items-center p-5 bg-brand-liteorange rounded-rt-2 rounded-rb-2">
                        <h1 className="text-8">SS3</h1>
                    </div>
                </div>

                <div className="grid grid-cols-2 h-50">
                    <div className="grid grid-cols-1 place-items-center p-5 bg-brand-orange rounded-lt-2 rounded-lb-2">
                        <h3 className="text-5">Subject Assigned</h3>
                        <h1 className="text-8">Biology</h1>
                    </div>
                    <div className="grid grid-cols-1 place-items-center p-5 bg-brand-liteorange rounded-rt-2 rounded-rb-2">
                        <h1 className="text-8">SS3</h1>
                    </div>
                </div>

                <div className="grid grid-cols-2 h-50">
                    <div className="grid grid-cols-1 place-items-center p-5 bg-brand-orange rounded-lt-2 rounded-lb-2">
                        <h3 className="text-5">Duration</h3>
                        <h1 className="text-8">2hrs</h1>
                    </div>
                    <div className="grid grid-cols-1 place-items-center p-5 bg-brand-liteorange rounded-rt-2 rounded-rb-2">
                        <h1 className="text-8 text-center w-20">10am - 12pm</h1>
                    </div>
                </div>

                <div className="grid grid-cols-2 h-50">
                    <div className="grid grid-cols-1 place-items-center p-5 bg-brand-orange rounded-lt-2 rounded-lb-2">
                        <h3 className="text-5">Days</h3>
                        <h1 className="text-8">4</h1>
                    </div>
                    <div className="grid grid-cols-1 place-items-center p-5 bg-brand-liteorange rounded-rt-2 rounded-rb-2">
                        <h1 className="text-8">Monday Wednesday Friday</h1>
                    </div>
                </div>
            </section>

        </main>
    </>
  );
}

export default Students;
