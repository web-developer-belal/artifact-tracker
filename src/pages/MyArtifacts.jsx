import ArtifactCard from "../components/artifact/ArtifactCard";

const MyArtifacts = () => {
  const myData = [];

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">My Artifacts</h2>
      {myData.length === 0 ? (
        <p className="text-center text-gray-500">You haven't added any artifacts yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {myData.map((artifact, idx) => (
            <div key={idx} className="space-y-2">
              <ArtifactCard artifact={artifact} />
              <div className="flex gap-2">
                <button className="btn btn-warning btn-sm">Update</button>
                <button className="btn btn-error btn-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;