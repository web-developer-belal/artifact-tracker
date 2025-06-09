const ArtifactCard = ({ artifact }) => {
  const {
    artifactImage,
    artifactName,
    shortDescription,
    likeCount,
  } = artifact;

  return (
    <div className="card bg-base-100 shadow-xl">
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
          <div className="badge badge-secondary">Likes: {likeCount}</div>
          <button className="btn btn-sm btn-outline btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;