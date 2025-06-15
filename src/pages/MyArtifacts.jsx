import { use, useEffect, useState } from "react";
import ArtifactCard from "../components/artifact/ArtifactCard";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import Search from "../components/Search";
import SectionTitle from "../components/SectionTitle";
import { Helmet } from "react-helmet";

const MyArtifacts = () => {
  const { user } = use(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMyArtifacts = async () => {
      try {
        axios
          .get(
            `${import.meta.env.VITE_APP_BACKEND_URL}/my-artifacts`,
            { params: { email: user.email } },
            { withCredentials: true }
          )
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              setArtifacts(response.data);
            } else {
              console.error("Error fetching artifacts:", response);
            }
          });
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      }
    };

    fetchMyArtifacts();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Artifact",
      text: "Are you sure you want to delete this artifact?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_APP_BACKEND_URL}/artifact/${id}`, {
            withCredentials: true,
          })
          .then((response) => {
            if (response.status === 200) {
              toast.success("Artifact deleted successfully!");
              setArtifacts(artifacts.filter((artifact) => artifact._id !== id));
            } else {
              toast.error("Failed to delete artifact. Please try again.");
            }
          })
          .catch((error) => {
            toast.error("Failed to delete artifact. Please try again.");
          });
      }
    });
  };

  const handelSearch = (searchValue) => {
    setLoading(true);
    axios
      .get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/my-artifacts`,
        {
          params: { email: user.email, search: searchValue },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200) {
          setArtifacts(response.data);
        } else {
          console.error("Error fetching artifacts:", response);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching artifacts:", error);
        setLoading(false);
      });
  };

  return (
    <div className="px-4 py-8">
      <Helmet>
        <title>My artifacts</title>
      </Helmet>
      <Search handelSearch={handelSearch} />
      <SectionTitle title="My artifacts" center={true} />
      {loading ? (
        <Loading />
      ) : artifacts.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't added any artifacts yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact, idx) => (
            <ArtifactCard
              key={idx}
              artifact={artifact}
              editDelete={true}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
