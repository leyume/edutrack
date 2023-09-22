import { useState, useEffect } from "react";
import PageLabel from "~/components/PageLabel";
import { userData, mutateX } from "~/components/Query";
import { role } from "~/utils";

export default function RepProfile() {
  // let [loading, setLoading] = useState(false);
  const { data: user, isSuccess: success } = userData();
  const { mutate, data, isLoading } = mutateX("user", "user", "PUT");

  const formHandler = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    // console.log({ formData });
    await mutate(formData);
  };

  const [msg, setMsg] = useState(false);
  const [err, setErr] = useState(true);

  useEffect(() => {
    if (data?.detail) {
      setErr(true);
      setMsg(data?.detail);
    } else {
      setErr(false);
      setMsg(data?.message);
    }
  }, [data]);

  return (
    success &&
    user?.id && (
      <div className="px-10">
        <PageLabel title="Representative Profile" details="Update your Personal Profile" />

        <section className="bg-brand-liteorange py-6 px-10 mt-6 mb-12 rounded-2">
          {/* <div className="mb-5 flex items-center justify-center flex-col">
            <div className="flex items-center justify-between">
              <div className="i-tabler-user-circle flex items-center justify-between text-40"></div>
            </div>
            <button className="btn">Change Image</button>
          </div> */}

          {!!msg && <div className={"msg mt-1 " + (err ? "error" : "success")}>{msg}</div>}

          <form
            className="grid grid-cols-2 gap-4 px-10% pb-24 pt-6
            [&_label]:grid [&_label.flex]:flex [&_label]:gap-2 [&_label_input]:p-2.5 
            [&_label]:text-sm [&_label_input]:rounded-md [&_label_input]:outline-none 
            [&_label_input]:border-solid [&_label_input]:border-1 [&_label_input]:border-gray-300"
            onSubmit={formHandler}
          >
            <label>
              First Name
              <input type="text" name="firstname" defaultValue={user.firstname} />
            </label>

            <label>
              Last Name
              <input type="text" name="lastname" defaultValue={user.lastname} />
            </label>

            <label>
              Phone
              <input type="text" name="phone" defaultValue={user.phone} />
            </label>

            <div className="col-span-2"></div>

            <label>
              Email
              <input type="text" readOnly="readonly" defaultValue={user.email} />
            </label>

            <label>
              Role
              <input type="text" readOnly="readonly" defaultValue={role(user.role)} className="capitalize" />
            </label>

            {/* <label>
              Gender
              <input type="text" name="gender" />
            </label> */}

            <div className="pt-4 col-span-2 flex gap-4 justify-center">
              {/* <button className="btn btn-alt" type="button">
                Edit
              </button> */}
              <button className="btn">{!isLoading ? <>Update</> : <div className="i-svg-spinners-ring-resize"></div>}</button>
            </div>
          </form>
        </section>
      </div>
    )
  );
}
