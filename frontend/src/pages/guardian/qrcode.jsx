import { QRCodeSVG } from "qrcode.react";
import { userData } from "~/components/Query";
import PageLabel from "~/components/PageLabel";

export default function GuardianDashboard() {
  const { data: user, isSuccess, isError } = userData();

  console.log({ user });

  let code = crypto.randomUUID();

  return (
    isSuccess &&
    user?.institution?.name && (
      <div className="px-10 grid gap-6">
        <PageLabel title="Your QRCode" details="Use this to pickup and drop your children at school." />
        <section className="text-center">
          <QRCodeSVG value={code + "_" + user.id} size="300" />
        </section>
      </div>
    )
  );
}
