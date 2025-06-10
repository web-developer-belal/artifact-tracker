import CountUp from "react-countup";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router";

const ArtifactCard = ({ artifact }) => {
  const { artifactImage, artifactName, shortDescription, likeCount } = artifact;
  // console.log(artifact);
  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition-shadow duration-300">
      <figure>
        <img
          src={artifactImage}
          alt={artifactName}
          className="h-52 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{artifactName}</h2>
        <p>{shortDescription}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SlLike />
            <CountUp end={Number(likeCount)} duration={2.75} />
          </div>
          <Link to={`/artifact-details/${artifact.id}`} className="btn btn-sm btn-outline btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
