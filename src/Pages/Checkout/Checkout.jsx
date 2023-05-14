import { useLoaderData } from "react-router-dom";
import checkoutImg from "../../assets/images/checkout/checkout.png";

const Checkout = () => {
  const service = useLoaderData();
  const { title} = service;
  console.log(title);

  return (
    <>
      <div className="">
        <img src={checkoutImg} className="w-full rounded-xl" />
      </div>
      <div className="hero min-h-screen">
        <form className="w-full shadow-2xl bg-base-200 p-10 rounded-xl">
        <h3 className="text-center pb-10 text-3xl font-semibold">Check Out: {title}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="form-control ">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="password"
                placeholder="Confirm Password"
                className="input"
                required
              />
            </div>
          </div>
          <div className="form-control mt-5 rounded-xl">
            <textarea
              className="px-5 py-4 rounded-xl"
              name="message"
              placeholder="Your Message"
              id=""
              cols="30"
              rows="5"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FF3811] border-[#FF3811]">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
