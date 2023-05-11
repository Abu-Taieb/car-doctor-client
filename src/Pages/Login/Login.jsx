import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
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
            <h2 className="text-4xl font-bold text-center">Login</h2>
            <form onSubmit={handleLogin}>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <p className="text-red-500 text-sm mb-2">{error}</p>
                <input
                  className="btn bg-[#FF3811] border-[#FF3811]"
                  type="submit"
                  value="Login"
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
                New in Car Doctor?{" "}
                <Link to={"/signup"} className="font-bold text-[#FF3811]">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
