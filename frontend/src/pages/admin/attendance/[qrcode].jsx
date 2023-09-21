import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PageLabel from "~/components/PageLabel";
import { QrScanner } from "react-qrcode-scanner";
import fetchAPI from "~/utils/fetchAPI";

export default function AttendanceGuardian() {
  const navigate = useNavigate();

  const [scan, setScan] = useState(false);
  const [data, setData] = useState({});

  const [msg, setMsg] = useState(false);
  const [err, setErr] = useState(true);

  const [aLoad, setALoad] = useState(false);
  const [dLoad, setDLoad] = useState(false);

  const today = new Date().toJSON().slice(0, 10);

  let { qrcode } = useParams();

  useEffect(() => {
    getGuardian(qrcode);
  }, [qrcode]);

  const getGuardian = async (qrcode) => {
    let res = await fetchAPI("guardians/qrcode/" + qrcode);
    // console.log({ res });
    setData(res);
  };

  const handleScan = (value) => {
    // console.log({ value });
    setScan(false);
    // getGuardian(value);
    navigate("/admin/attendance/" + value);
  };

  const handleError = (error) => console.log({ error });

  const attend = async (ward_id, arrival = true) => {
    setMsg("");
    setErr(true);

    if (aLoad || dLoad) return;
    let date = new Date().toJSON();

    let dd = {
      institution_id: data.institution_id,
      student_id: ward_id,
      date,
    };

    let method = "POST";
    if (arrival) {
      setALoad(true);
      dd.guardian_arrival_id = data.id;
      dd.arrival = date;
    } else {
      setDLoad(true);
      dd.guardian_departure_id = data.id;
      dd.departure = date;
      method = "PUT";
    }

    let res = await fetchAPI("attendance", method, { ...dd });
    console.log({ res });

    setALoad(false);
    setDLoad(false);

    if (res?.id || res?.message) {
      setErr(false);
      await getGuardian(qrcode);
      setMsg(res?.message || "Successfully updated");
    } else {
      setMsg(res.detail);
    }
  };

  const spinner = <div className="i-svg-spinners-ring-resize absolute top-1/2 left-1/2 -mt-1.5 -ml-1.5"></div>;

  return (
    <>
      <div className="px-10">
        <div className="flex gap-6">
          <PageLabel title="Attendance Scan" details="Let’s keep in track with your Institution Details." className="flex-grow" />
          <a onClick={() => setScan(true)} className="grid grid-cols-2 w-48 b b-solid b-gray-300 rounded-lg pl-2.5 items-center">
            <b className="text-brand-pink">Click Here to Scan Another</b>
            <img src="/images/qr.png" alt="qrcode" className="w-full p-2" />
          </a>
        </div>

        {!!data && (
          <section className="grid grid-cols-3 gap-6 mt-6 pb-20">
            <div>
              <div className="bg-brand-pink text-white rounded-lg p-6">
                <div className="opacity-75 mb-1">Guardian</div>
                <h3>{data.firstname + " " + data.lastname}</h3>
                <div className="mb-2 mt-1">{data.relation}</div>
                <div className="text-xs opacity-75">{data.email}</div>
                <div className="text-xs opacity-75">{data.phone}</div>
              </div>
            </div>
            <div className="col-span-2 grid gap-6">
              <div className="bg-brand-liteorange p-6 rounded-lg">
                <h2>Wards</h2>
                {!!msg && <div className={"msg mt-1 " + (err ? "error" : "success")}>{msg}</div>}
                <div className="grid grid-cols-2 gap-4 mt-3">
                  {data.wards?.map((ward, i) => (
                    <div className="bg-white rounded-lg px-3 pt-6 pb-8" key={i}>
                      <div className="w-12 h-12 b-3px b-solid b-blue-200  rounded-full bg-brand-blue text-white text-xl font-bold tracking-tighter mx-auto flex items-center justify-center mb-2">
                        {ward.firstname[0]}
                        {ward.lastname[0]}
                      </div>
                      <div className="text-center pt-2">
                        {ward.firstname} {ward.lastname}
                      </div>
                      <div className="text-center text-10px pb-2">Today - {today}</div>
                      <div className={"flex justify-center gap-2 mt-3"}>
                        <a
                          className={
                            "btn btn-mini relative " +
                            (ward.attendance[ward.attendance?.length - 1]?.arrival?.slice(0, 10) == today ? "opacity-30 inactive" : "")
                          }
                          onClick={() => attend(ward.id)}
                        >
                          <span className={aLoad ? "opacity-20" : ""}>Arrival</span>
                          {aLoad && spinner}
                        </a>
                        <a
                          className={
                            "btn btn-alt btn-mini btn-pink relative " +
                            (ward.attendance[ward.attendance?.length - 1]?.departure?.slice(0, 10) == today ? "opacity-30 inactive" : "")
                          }
                          onClick={() => attend(ward.id, false)}
                        >
                          <span className={dLoad ? "opacity-20" : ""}>Departure</span>
                          {dLoad && spinner}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-litepink p-6 rounded-lg">
                <h2>Attendance Track</h2>

                <table className="w-full my-3 mt-3">
                  <thead className="text-gray-500">
                    <tr className="text-left">
                      <th>Date</th>
                      <th>Arrival</th>
                      <th>Departure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!!data.wards?.length &&
                      data.wards?.map((ward, index) => (
                        <Fragment key={index}>
                          {ward.attendance?.reverse().map((att, i) => (
                            <tr key={i} className="[&>td]:py-1 text-sm">
                              <td>{att.date.split("T")[0]}</td>
                              <td>
                                <div>
                                  {att.guardian_arrival?.firstname} {att.guardian_arrival?.lastname}
                                </div>
                                <div className="text-10px">{att.arrival}</div>
                              </td>
                              <td>
                                <div>
                                  {att.guardian_departure?.firstname} {att.guardian_departure?.lastname}
                                </div>
                                <div className="text-10px">{att.departure}</div>
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {scan && (
          <section onClick={() => setScan(false)} className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-80 z-1000">
            <QrScanner onScan={handleScan} onError={handleError} />
          </section>
        )}
      </div>
    </>
  );
}
