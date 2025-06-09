import ArtifactCard from "../components/artifact/ArtifactCard";

const LikedArtifacts = () => {
  const liked = [];

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Liked Artifacts</h2>
      {liked.length === 0 ? (
        <p className="text-center text-gray-500">You haven't liked any artifacts yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liked.map((artifact, idx) => (
            <ArtifactCard key={idx} artifact={artifact} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;