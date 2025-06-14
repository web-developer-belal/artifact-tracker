import { useContext, useEffect, useState } from "react";
import ArtifactCard from "../components/artifact/ArtifactCard";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import SectionTitle from "../components/SectionTitle";
import Search from "../components/Search";
import Loading from "../components/Loading";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMyArtifacts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_URL}/liked-artifacts`,
          { params: { email: user.email } },{ withCredentials: true }
        );
        if (response.status === 200) {
          setArtifacts(response.data);
        } else {
          console.error("Error fetching artifacts:", response);
        }
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      }
      setLoading(false);
    };

    if (user?.email) {
      fetchMyArtifacts();
    }
  }, [user?.email]);

  const handelSearch = (searchValue) => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_URL}/liked-artifacts`, {
        params: { email: user.email, search: searchValue },
      },{ withCredentials: true })
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
      <Search handelSearch={handelSearch} />
      <SectionTitle title="Liked artifacts" center={true} />
      {loading ? (
        <Loading />
      ) : artifacts.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't liked any artifacts yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact, idx) => (
            <ArtifactCard key={idx} artifact={artifact} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;