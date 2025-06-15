import { use, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import { Img } from "react-image";
import { Helmet } from "react-helmet";

const ArtifactDetails = () => {
  const { user } = use(AuthContext);
  const artifact = useLoaderData();
  const [likes, setLikes] = useState(artifact.likeCount);
  const handleLike = (artifactId, userEmail) => {
    axios
      .post(`${import.meta.env.VITE_APP_BACKEND_URL}/artifact/like`, {
        artifactId,
        userEmail,
      },{withCredentials:true})
      .then((response) => {
        if (response.status === 200) {
          if (response.data.liked) {
            setLikes(likes + 1);
          } else {
            setLikes(likes - 1);
          }
        } else {
          console.error("Error liking artifact:", response);
        }
      })
      .catch((error) => {
        console.error("Error liking artifact:", error);
      });
  };
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <Helmet>
        <title>Artifacts details</title>
      </Helmet>
      <div className="grid grid-cols-1">
        <motion.div
          className="bg-base-100 rounded-xl shadow-lg p-6 flex flex-col"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Img
            src={artifact.artifactImage}
            alt={artifact.artifactName}
            loader={<div>Loading...</div>}
            className="w-full h-72 object-cover rounded-xl mb-6 shadow"
            unloader={
              <img
                src="https://placehold.co/600x400?text=Artifact+Image"
                alt="No Image"
              />
            }
          />
          <h2 className="text-4xl font-bold mb-2">{artifact.artifactName}</h2>
          <p className="text-lg text-gray-600 mb-4">
            {artifact.shortDescription}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <p>
              <strong>Type:</strong> {artifact.artifactType}
            </p>
            <p>
              <strong>Created At:</strong> {artifact.createdAt}
            </p>
            <p>
              <strong>Discovered At:</strong> {artifact.discoveredAt}
            </p>
            <p>
              <strong>Discovered By:</strong> {artifact.discoveredBy}
            </p>
            <p>
              <strong>Present Location:</strong> {artifact.presentLocation}
            </p>
            <p>
              <strong>Added By:</strong> {artifact.userName}
            </p>
           <p>
              <strong>Added Email:</strong> {artifact.userEmail}
            </p>
            <p className="sm:col-span-2">
              <strong>Historical Context:</strong>{" "}
              {artifact.historicalContext}
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="btn btn-outline btn-success w-fit flex items-center gap-2"
            onClick={() => handleLike(artifact._id, user.email)}
          >
            👍 Like (
            <span> {likes}</span>)
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
