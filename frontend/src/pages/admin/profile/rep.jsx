import { useState } from "react";
import PageLabel from "~/components/PageLabel";
import { userData, mutateX } from "~/components/Query";
import { role } from "~/utils";

function RepProfile() {
  // let [loading, setLoading] = useState(false);
  const { data: user, isSuccess: success } = userData();

  const formHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    console.log({ formData });

    await mutate(formData);
    // setLoading(false);
  };

  const { mutate, data, isLoading } = mutateX("user", "user", "PUT");

  return (
    success &&
    user?.id && (
      <div className="px-10">
        <PageLabel title="Representative Profile" details="Update your Personal Profile" />

        <section className="bg-brand-liteorange py-6 px-10 mt-6 mb-12 rounded-2">
          <div className="mb-5 flex items-center justify-center flex-col">
            <div className="flex items-center justify-between">
              <div className="i-tabler-user-circle flex items-center justify-between text-40"></div>
            </div>
            <button className="btn">Change Image</button>
          </div>

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
              <button className="btn btn-alt" type="button">
                Edit
              </button>
              <button className="btn">{!isLoading ? <>Update</> : <div className="i-svg-spinners-ring-resize"></div>}</button>
            </div>
          </form>

          {/* <form action="" className="grid grid-cols-2 gap-4 w-full items-center">
            <div className="w-100%">
              <label htmlFor="">First Name</label>
              <br />
              <input type="text" className="my-input" value="Tabitha" disabled />
              <br />
              <br />

              <label htmlFor="">Email</label>
              <br />
              <input type="email" className="my-input" value="tabitawillson@gmail.com" disabled />
              <br />
              <br />

              <label htmlFor="">School</label>
              <br />
              <input type="text" className="my-input" value="St. Charles Royal Academy" disabled />
              <br />
              <br />
            </div>

            <div className="w-100%">
              <label htmlFor="">Last Name</label>
              <br />
              <input type="text" className="my-input" value="Willson" disabled />
              <br />
              <br />

              <label htmlFor="">Role</label>
              <br />
              <input type="text" className="my-input" value="Representative" disabled />
              <br />
              <br />

              <div className="flex justify-between my-4">
                <div>
                  <p className="mb-1">Gender</p>
                  <input type="radio" name="gender" className="mr-2" disabled />
                  <label htmlFor="" className="mr-4">
                    Male
                  </label>
                  <input type="radio" name="gender" className="mr-2" />
                  <label htmlFor="">Female</label>
                </div>
                <div></div>
              </div>
            </div>

            <div className="col-span-2 flex justify-center gap-4">
              <button className="btn">Edit</button>
              <button className="btn">Update</button>
            </div>
          </form> */}
        </section>
      </div>
    )
  );
}

export default RepProfile;
