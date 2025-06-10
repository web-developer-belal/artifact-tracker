import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifact from "../pages/AddArtifact";
import LikedArtifacts from "../pages/LikedArtifacts";
import MyArtifacts from "../pages/MyArtifacts";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ArtifactDetails from "../pages/ArtifactDetails";
import ErrorPage from "../components/errors/ErrorPage";
import ProtectedRoute from "../middlewire/ProtectedRoute";
import EditArtifact from "../pages/EditArtifact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        loader: () =>
          fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/all-artifacts`),
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/add-artifacts",
            Component: AddArtifact,
          },
          {
            path: "/liked-artifacts",
            Component: LikedArtifacts,
          },
          {
            path: "/my-artifacts",
            Component: MyArtifacts,
          },
          {
            path: "/all-artifacts",
            loader: () =>
              fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/all-artifacts`),
            Component: AllArtifacts,
          },
          {
            path: "/artifact-details/:id",
            loader: ({ params }) =>
              fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/artifact/${params.id}`),
            Component: ArtifactDetails,
          },
          {
            path: "/edit-artifact/:id",
            loader: ({ params }) =>
              fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/artifact/${params.id}`),
            Component: EditArtifact,
          },
        ],
      },
    ],
  },
]);

export default router;
