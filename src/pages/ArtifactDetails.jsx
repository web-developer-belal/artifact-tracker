const ArtifactDetails = () => {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1611924653334-d518a50a4d9a"
        alt="Artifact"
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h2 className="text-3xl font-bold">Antikythera Mechanism</h2>
      <p className="my-4">
        Ancient Greek analog computer used to predict astronomical positions and eclipses.
      </p>
      <div className="space-y-1">
        <p><strong>Type:</strong> Tools</p>
        <p><strong>Created At:</strong> 150 BC</p>
        <p><strong>Discovered At:</strong> 1901</p>
        <p><strong>Discovered By:</strong> Valerios Stais</p>
        <p><strong>Present Location:</strong> National Archaeological Museum, Athens</p>
        <p><strong>Added By:</strong> John Doe (john@example.com)</p>
        <div className="mt-4">
          <button className="btn btn-outline btn-success">👍 Like (34)</button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;