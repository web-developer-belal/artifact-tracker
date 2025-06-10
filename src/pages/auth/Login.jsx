import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import loginAnim from "../../assets/lottie/login.json";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
const style = {
  height: 300,
};
const Login = () => {
  const [loading, setLoading] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const { user, setUser, signInUser, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      const redirectTo = location.state || "/";
      navigate(redirectTo, { replace: true });
    }
  }, [user, navigate, location.state]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;
    signInUser(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
        toast.success("Login successful");
        form.reset();
        const redirectTo = location.state || "/";
        navigate(redirectTo);
      })
      .catch(() => {
        toast.error("Credential not matched");
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful");
        const redirectTo = location.state || "/";
        navigate(redirectTo);
      })
      .catch(() => {
        toast.error("Something wen" / "t wrong");
      });
  };
  return (
    <div className="grid md:grid-cols-2 gap-5 items-center justify-center max-w-6xl mx-auto px-6 py-12 bg-base-100 min-h-screen">
      <div>
        <Lottie
          animationData={loginAnim}
          loop={true}
          className="max-h-[300px]"
          style={style}
        />
      </div>
      <div className="w-full max-w-md mx-auto bg-base-200 p-4 rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handelSubmit} className="grid gap-6">
          <fieldset className="">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
            />
          </fieldset>

          <fieldset className="">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full"
            />
          </fieldset>

          <fieldset>
            <button type="submit" className="btn btn-primary w-full">
              <span
                className={`loading loading-spinner text-success ${
                  loading ? "" : "hidden"
                }`}
              ></span>
              Login
            </button>
          </fieldset>

          <fieldset>
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="btn btn-success text-white w-full"
            >
              <FaGoogle className="mr-2" /> Continue with Google
            </button>
          </fieldset>

          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="link link-primary">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
