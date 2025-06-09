import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifact from "../pages/AddArtifact";
import LikedArtifacts from "../pages/LikedArtifacts";
import MyArtifacts from "../pages/MyArtifacts";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        path:'/',
        Component:Home
      },
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register
      },
      {
        path:'/add-artifacts',
        Component:AddArtifact
      },
      {
        path:'/liked-artifacts',
        Component:LikedArtifacts
      },
      {
        path:'/my-artifacts',
        Component:MyArtifacts
      },
      {
        path:'/all-artifacts',
        Component:AllArtifacts
      },

    ]
  },
]);

export default router;
