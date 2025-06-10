import { use, useEffect, useState } from "react";
import ArtifactCard from "../components/artifact/ArtifactCard";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";

const LikedArtifacts = () => {
  const { user } = use(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  useEffect(() => {
    const fetchMyArtifacts = async () => {
      try {
        axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/my-artifacts`, {
          params: { email: user.email },
        })
        .then(response => {
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
    }, [user.email]);

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Liked Artifacts</h2>
      {artifacts.length === 0 ? (
        <p className="text-center text-gray-500">You haven't liked any artifacts yet.</p>
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