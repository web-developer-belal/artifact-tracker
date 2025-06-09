const AddArtifact = () => {
  return (
    <div className="px-4 py-8 bg-base-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Artifact</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl p-6 mx-auto bg-base-200 shadow hover:shadow-md transition-all rounded-lg ">
        <fieldset className="fieldset">
          <label className="label" htmlFor="artifactName">
            <span className="label-text">Artifact Name</span>
          </label>
          <input name="artifactName" type="text" className="input input-bordered w-full" />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="artifactImage">
            <span className="label-text">Artifact Image URL</span>
          </label>
          <input name="artifactImage" type="url" className="input input-bordered w-full" />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="artifactType">
            <span className="label-text">Artifact Type</span>
          </label>
          <select name="artifactType" className="select select-bordered w-full">
            <option>Tools</option>
            <option>Weapons</option>
            <option>Documents</option>
            <option>Writings</option>
          </select>
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="createdAt">
            <span className="label-text">Created At</span>
          </label>
          <input name="createdAt" type="text" className="input input-bordered w-full" placeholder="e.g., 100 BC" />
        </fieldset>

        <fieldset className="fieldset md:col-span-2">
          <label className="label" htmlFor="historicalContext">
            <span className="label-text">Historical Context</span>
          </label>
          <textarea name="historicalContext" className="textarea textarea-bordered w-full"></textarea>
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="discoveredAt">
            <span className="label-text">Discovered At</span>
          </label>
          <input name="discoveredAt" type="text" className="input input-bordered w-full" placeholder="e.g., 1799" />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="discoveredBy">
            <span className="label-text">Discovered By</span>
          </label>
          <input name="discoveredBy" type="text" className="input input-bordered w-full" />
        </fieldset>

        <fieldset className="fieldset md:col-span-2">
          <label className="label" htmlFor="presentLocation">
            <span className="label-text">Present Location</span>
          </label>
          <input name="presentLocation" type="text" className="input input-bordered w-full" />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="userName">
            <span className="label-text">Your Name</span>
          </label>
          <input name="userName" type="text" className="input input-bordered w-full" readOnly value="John Doe" />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="userEmail">
            <span className="label-text">Your Email</span>
          </label>
          <input name="userEmail" type="email" className="input input-bordered w-full" readOnly value="john@example.com" />
        </fieldset>

        <div className="fieldset md:col-span-2 mt-4">
          <button className="btn btn-primary w-full">Add Artifact</button>
        </div>
      </form>
    </div>
  );
};

export default AddArtifact;
