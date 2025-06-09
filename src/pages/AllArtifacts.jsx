import ArtifactCard from "../components/artifact/ArtifactCard";

const AllArtifacts = () => {
  const artifacts = new Array(6).fill({
    artifactImage: "https://images.unsplash.com/photo-1608889175119-324d1bd60017",
    artifactName: "Sample Artifact",
    shortDescription: "This is a placeholder artifact.",
    likeCount: 0,
  });

  return (
    <div className="px-4 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {artifacts.map((artifact, idx) => (
        <ArtifactCard key={idx} artifact={artifact} />
      ))}
    </div>
  );
};

export default AllArtifacts;