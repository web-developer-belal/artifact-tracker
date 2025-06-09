import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky px-4">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all-artifacts">All Artifacts</NavLink></li>
            <li><NavLink to="/add-artifacts">Add Artifacts</NavLink></li>
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-xl">Historical Tracker</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all-artifacts">All Artifacts</NavLink></li>
            <li><NavLink to="/add-artifacts">Add Artifacts</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><a>John Doe</a></li>
            <li><NavLink to="/my-artifacts">My Artifacts</NavLink></li>
            <li><NavLink to="/liked-artifacts">Liked Artifacts</NavLink></li>
            <li><button>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
