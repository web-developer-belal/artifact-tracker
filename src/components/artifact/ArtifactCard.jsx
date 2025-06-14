import CountUp from "react-countup";
import { FaEdit, FaTrash } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router";

const ArtifactCard = ({ artifact, editDelete = false, handleDelete }) => {
  const { artifactImage, artifactName, shortDescription, likeCount, _id } =
    artifact;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <figure className="relative">
        <img
          src={artifactImage}
          alt={artifactName}
          className="h-56 w-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400?text=Artifact+Image";
          }}
        />
        {editDelete && (
          <div className="absolute top-3 right-3 flex gap-2 z-10">
            <Link
              to={`/edit-artifact/${_id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow cursor-pointer transition"
              title="Edit"
            >
              <FaEdit size={18} />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow cursor-pointer transition"
              title="Delete"
              type="button"
            >
              <FaTrash size={18} />
            </button>
          </div>
        )}
      </figure>
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-xl font-bold mb-2 line-clamp-1">{artifactName}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{shortDescription}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1 text-green-600 font-semibold">
            <SlLike />
            <span className="ml-1">
              <CountUp end={Number(likeCount)} duration={1.5} />
            </span>
          </div>
          <Link
            to={`/artifact-details/${_id}`}
            className="btn btn-primary btn-sm rounded-full px-4 shadow"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
