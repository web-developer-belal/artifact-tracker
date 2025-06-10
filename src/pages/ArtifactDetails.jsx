import { use, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";

const otherArtifacts = [
  {
    artifactImage: "https://images.unsplash.com/photo-1490237014491-822aee911b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artifactName: "Rosetta Stone",
    shortDescription: "Key to understanding Egyptian hieroglyphs.",
  },
  {
    artifactImage: "https://images.unsplash.com/photo-1490237014491-822aee911b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artifactName: "Dead Sea Scrolls",
    shortDescription: "Ancient Jewish religious manuscripts.",
  },
];

const ArtifactDetails = () => {
  const {user}=use(AuthContext);
  const artifact = useLoaderData()
  const [likes, setLikes] = useState(artifact.likeCount);
  const handleLike = (artifactId, userEmail) => {
    axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/artifact/like`, {
      artifactId,
      userEmail
    }).then((response) => {
      if (response.status === 200) {
        console.log("Artifact liked successfully:", response.data);
        if(response.data.liked){
          setLikes(likes + 1);
        }else{
          setLikes(likes - 1);
        }
      } else {
        console.error("Error liking artifact:", response);
      }
    }).catch((error) => {
      console.error("Error liking artifact:", error);
    }); 
  }
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Artifact Details */}
        <motion.div
          className="md:col-span-2 bg-base-100 rounded-xl shadow-lg p-6 flex flex-col"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={artifact.artifactImage}
            alt={artifact.artifactName}
            className="w-full h-72 object-cover rounded-xl mb-6 shadow"
          />
          <h2 className="text-4xl font-bold mb-2">{artifact.artifactName}</h2>
          <p className="text-lg text-gray-600 mb-4">{artifact.shortDescription}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <p><strong>Type:</strong> {artifact.type}</p>
            <p><strong>Created At:</strong> {artifact.createdAt}</p>
            <p><strong>Discovered At:</strong> {artifact.discoveredAt}</p>
            <p><strong>Discovered By:</strong> {artifact.discoveredBy}</p>
            <p><strong>Present Location:</strong> {artifact.presentLocation}</p>
            <p><strong>Added By:</strong> {artifact.addedBy}</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="btn btn-outline btn-success w-fit flex items-center gap-2"
            onClick={() => handleLike(artifact._id,user.email)}
          >
            👍 Like (
            <CountUp end={Number(likes)} duration={5} key={likes} />
            )
          </motion.button>
        </motion.div>

        {/* Right: Other Artifacts */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-2">Other Artifacts</h3>
          {otherArtifacts.map((a, idx) => (
            <motion.div
              key={idx}
              className="bg-base-200 rounded-lg cursor-pointer shadow p-4 flex gap-4 hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={a.artifactImage}
                alt={a.artifactName}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-bold text-lg">{a.artifactName}</h4>
                <p className="text-gray-600 text-sm">{a.shortDescription}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ArtifactDetails;