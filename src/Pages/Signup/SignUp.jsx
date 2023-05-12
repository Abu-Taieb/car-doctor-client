import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import loginImage from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);

  // const { signUpGoogle } = useContext(AuthContext);


  //   const handleSignUpGoogle = event => {
  //       event.preventDefault();
  //       console.log("google");
  //   }

  //   signUpGoogle()
  //   .then(result => {
  //       const googleUser = result.user;
  //       console.log(googleUser);
  //   })
  //   .then(error => {
  //       console.error(error);
  //       console.log(error.message);
  //   })




//   Sign in with email & password 
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-10 lg:py-5">
      <div className="hero-content flex flex-col-reverse lg:flex-row gap-20">
        <div className="lg:w-1/2 ">
          <img src={loginImage} alt="Log In" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-4xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <p className="text-[#FF3811] text-sm mb-2">{error}</p>
                <input
                  className="btn bg-[#FF3811] border-[#FF3811]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="">
              <p className="text-center font-semibold my-4">Or Sign Up With</p>
              <div className="flex gap-10 justify-center mb-5">
                <button className="btn gap-2 btn-outline border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">
                  Google <FaGoogle />
                </button>
                <button className="btn btn-outline border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] gap-2">
                  Github <FaGithub />
                </button>
              </div>
              <p className="text-center my-3">
                Already have an Account?{" "}
                <Link to={"/login"} className="font-bold text-[#FF3811]">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
