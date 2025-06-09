import Lottie from "lottie-react";
import registerAnim from "../../assets/lottie/login.json";
import { Link } from "react-router";
const Register = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 items-center justify-center max-w-6xl mx-auto px-6 py-12 bg-base-100 min-h-screen">
      <div>
        <Lottie animationData={registerAnim} loop={true} style={{height:300}} />
      </div>
      <div className="w-full max-w-md mx-auto bg-base-200 p-4 rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form className="grid gap-6">
          <fieldset>
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" className="input input-bordered w-full" />
          </fieldset>

          <fieldset>
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" className="input input-bordered w-full" />
          </fieldset>

          <fieldset>
            <label className="label" htmlFor="photoURL">
              <span className="label-text">Photo URL</span>
            </label>
            <input name="photoURL" type="url" className="input input-bordered w-full" />
          </fieldset>

          <fieldset>
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" className="input input-bordered w-full" />
          </fieldset>

          <fieldset>
            <button type="submit" className="btn btn-primary w-full">Register</button>
          </fieldset>

          <p className="text-center">
            Already have an account? <Link to="/login" className="link link-primary">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;


