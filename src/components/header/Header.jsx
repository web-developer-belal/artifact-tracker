import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import userPhoto from "../../assets/lottie/user.json";
import "./header.css";
import { Img } from "react-image";
import axios from "axios";

const allNavRoutes = [
  { name: "Home", path: "/", protected: false },
  { name: "All Artifacts", path: "/all-artifacts", protected: false },
  { name: "Add Artifact", path: "/add-artifacts", protected: true },
  { name: "My Artifacts", path: "/my-artifacts", protected: true },
  { name: "Liked Artifacts", path: "/liked-artifacts", protected: true },
  { name: "About", path: "/about", protected: false },
  { name: "Faq", path: "/faq", protected: false },
  { name: "Contact", path: "/contact", protected: false },
];

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        axios
          .post(`${import.meta.env.VITE_APP_BACKEND_URL}/logout`, {}, { withCredentials: true })
          .then(() => toast.success("Logout successful"))
          .catch(() => toast.success("Logout successful"));
      })
      .catch(() => toast.error("Logout failed"));
  };

  const publicRoutes = allNavRoutes.filter(route => !route.protected);
  const protectedRoutes = allNavRoutes.filter(route => route.protected);

  return (
    <div className="navbar sticky top-0 bg-base-100 shadow z-50 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
          >
            {[...publicRoutes, ...(user ? protectedRoutes : [])].map(({ name, path }) => (
              <li key={name}>
                <NavLink className="nav-link" to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="nav-brand font-extrabold text-2xl">
          Artifact <span className="text-secondary">Tracker</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {publicRoutes.map(({ name, path }) => (
            <li key={name}>
              <NavLink className="nav-link" to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn rounded-full btn-primary">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <Img
                    src={user.photoURL}
                    alt="user"
                    unloader={<Lottie animationData={userPhoto} classID="bg-base-200" />}
                  />
                ) : (
                  <Lottie animationData={userPhoto} classID="bg-base-200" />
                )}
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow">
              <li><span>{user.displayName}</span></li>
              {protectedRoutes.map(({ name, path }) => (
                <li key={name}><NavLink to={path}>{name}</NavLink></li>
              ))}
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
