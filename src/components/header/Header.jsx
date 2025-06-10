import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { use } from "react";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import userPhoto from "../../assets/lottie/user.json";
import './header.css';
const Header = () => {
  const { user, logout } = use(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logout successful"))
      .catch(() => toast.error("Logout failed"));
  };
  return (
    <div className="navbar bg-base-100 shadow-sm sticky px-4 z-50">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/all-artifacts">All Artifacts</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/add-artifacts">Add Artifacts</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="nav-brand" >Historical Tracker</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/all-artifacts">All Artifacts</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/add-artifacts">Add Artifacts</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn ">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user.photoURL ? <img alt="User Avatar" src={user.photoURL} /> : <Lottie animationData={userPhoto} classID="bg-base-200"></Lottie>}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm !gap-1 dropdown-content bg-base-200 rounded-box  mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>{user.displayName}</a>
              </li>
              <li>
                <NavLink to="/my-artifacts">My Artifacts</NavLink>
              </li>
              <li>
                <NavLink to="/liked-artifacts">Liked Artifacts</NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="cursor-pointer">Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
