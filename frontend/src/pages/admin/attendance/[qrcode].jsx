import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageLabel from "~/components/PageLabel";
import { QrScanner } from "react-qrcode-scanner";
import fetchAPI from "~/utils/fetchAPI";

export default function AttendanceGuardian() {
  const [scan, setScan] = useState(false);
  const [data, setData] = useState({});

  let { qrcode } = useParams();
  console.log({ qrcode });

  useEffect(() => {
    getGuardian(qrcode);
  }, [qrcode]);

  const getGuardian = async (qrcode) => {
    let res = await fetchAPI("guardians/qrcode/" + qrcode);
    console.log({ res });
    setData(res);
  };

  const handleScan = (value) => {
    console.log({ value });
    setScan(false);
    getGuardian(value);
  };

  const handleError = (error) => console.log({ error });

  return (
    <>
      <div className="px-6">
        <div className="flex gap-6">
          <PageLabel title="Manage Attendance" details="Let’s keep in track with your Institution Details." className="flex-grow" />
          <a onClick={() => setScan(true)} className="grid grid-cols-2 w-48 b b-solid b-gray-300 rounded-lg p-2 items-center">
            <b className="text-brand-pink">Click Here to Scan Attendance</b>
            <img src="/images/qr.png" alt="qrcode" className="w-full" />
          </a>
        </div>

        {scan && (
          <section onClick={() => setScan(false)} className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-80 z-1000">
            <QrScanner onScan={handleScan} onError={handleError} />
          </section>
        )}

        <pre className="whitespace-pre-wrap">{JSON.stringify(data)}</pre>
      </div>
    </>
  );
}
