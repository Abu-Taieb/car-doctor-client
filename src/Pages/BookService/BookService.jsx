import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import bookImg from "../../assets/images/checkout/checkout.png";

const BookService = () => {
    const service = useLoaderData();
    const { title, price, img} = service;
    const {user} = useContext(AuthContext)
    
    const handleBookService = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.phone.value;
        const date = form.date.value;
        const message = form.message.value;
        const booking = {
            customerName: name,
            email,
            number,
            date,
            price,
            message
        }
        console.log(booking);

        fetch('http://localhost:5000/booking', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
          
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            alert('Booked Success')
          }
        })
    }

  return (
    <>
    
      <div className="">
        <img src={img} className="w-full rounded-xl h-60" />
      </div>
      <div className="hero min-h-screen">
        <form onSubmit={handleBookService} className="w-full shadow-2xl bg-base-200 p-10 rounded-xl">
          <h3 className="text-center pb-10 text-3xl font-semibold">
            Book Service : {title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="form-control ">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
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
                type="number"
                name="phone"
                placeholder="Phone"
                className="input"
                required
              />
            </div>
            

            <div className="form-control">
              <input
                type="date"
                name="date"
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
                type="number"
                name="dueAmount"
                placeholder={"Amount: $"+ parseFloat(price)}
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
            <button className="btn bg-[#FF3811] border-[#FF3811]">Order Confirm</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookService;
