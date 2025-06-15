import axios from "axios";
import { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { Helmet } from "react-helmet";

const EditArtifact = () => {
  const { user } = use(AuthContext);
  const artifactId = useParams().id;
  const artifact = useLoaderData();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);

    formData = Object.fromEntries(formData.entries());
    axios
      .put(
        `${import.meta.env.VITE_APP_BACKEND_URL}/artifact/${artifactId}`,
        formData,
        {
          withCredentials: true,
          params: { email: user.email },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          event.target.reset();
          toast.success("Artifact added successfully!");
          navigate("/my-artifacts");
        } else {
          toast.error("Failed to add artifact. Please try again.");
        }
      })
      .catch((error) => {
        toast.error("Failed to add artifact. Please try again.");
      });
  };
  return (
    <div className="px-4 py-8 bg-base-100">
      <Helmet>
        <title>Edit your artifacts.</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Artifact</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl p-6 mx-auto bg-base-200 shadow hover:shadow-md transition-all rounded-lg "
      >
        <fieldset className="fieldset">
          <label className="label" htmlFor="artifactName">
            <span className="label-text">Artifact Name</span>
          </label>
          <input
            name="artifactName"
            type="text"
            className="input input-bordered w-full"
            defaultValue={artifact.artifactName}
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="artifactImage">
            <span className="label-text">Artifact Image URL</span>
          </label>
          <input
            name="artifactImage"
            type="url"
            className="input input-bordered w-full"
            defaultValue={artifact.artifactImage}
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="artifactType">
            <span className="label-text">Artifact Type</span>
          </label>
          <select
            name="artifactType"
            className="select select-bordered w-full"
            defaultValue={artifact.artifactType}
          >
            <option value="">Select Type</option>
            <option>Tools</option>
            <option>Weapons</option>
            <option>Documents</option>
            <option>Writings</option>
            <option>Jewelry</option>
            <option>Pottery</option>
            <option>Coins</option>
            <option>Textiles</option>
            <option>Statues</option>
            <option>Paintings</option>
            <option>Architecture</option>
            <option>Relics</option>
            <option>Manuscripts</option>
            <option>Maps</option>
            <option>Other</option>
          </select>
        </fieldset>

        <fieldset className="fieldset md:col-span-2">
          <label className="label" htmlFor="historicalContext">
            <span className="label-text">Historical Context</span>
          </label>
          <textarea
            name="historicalContext"
            className="textarea textarea-bordered w-full"
            defaultValue={artifact.historicalContext}
          ></textarea>
        </fieldset>
        <fieldset className="fieldset md:col-span-2">
          <label className="label" htmlFor="shortDescription">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            name="shortDescription"
            className="textarea textarea-bordered w-full"
            placeholder="Brief summary of the artifact"
            defaultValue={artifact.shortDescription}
          ></textarea>
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="createdAt">
            <span className="label-text">Created At</span>
          </label>
          <input
            name="createdAt"
            type="text"
            className="input input-bordered w-full"
            placeholder="e.g., 100 BC"
            defaultValue={artifact.createdAt}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label" htmlFor="discoveredAt">
            <span className="label-text">Discovered At</span>
          </label>
          <input
            name="discoveredAt"
            type="text"
            className="input input-bordered w-full"
            placeholder="e.g., 1799"
            defaultValue={artifact.discoveredAt}
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="discoveredBy">
            <span className="label-text">Discovered By</span>
          </label>
          <input
            name="discoveredBy"
            type="text"
            className="input input-bordered w-full"
            defaultValue={artifact.discoveredBy}
          />
        </fieldset>

        <fieldset className="fieldset md:col-span-2">
          <label className="label" htmlFor="presentLocation">
            <span className="label-text">Present Location</span>
          </label>
          <input
            name="presentLocation"
            type="text"
            className="input input-bordered w-full"
            defaultValue={artifact.presentLocation}
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="userName">
            <span className="label-text">Your Name</span>
          </label>
          <input
            name="userName"
            type="text"
            className="input input-bordered w-full"
            readOnly
            defaultValue={user.displayName}
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="userEmail">
            <span className="label-text">Your Email</span>
          </label>
          <input
            name="userEmail"
            type="email"
            className="input input-bordered w-full"
            readOnly
            defaultValue={user.email}
          />
        </fieldset>

        <div className="fieldset md:col-span-2 mt-4">
          <button className="btn btn-primary w-full">Update Artifact</button>
        </div>
      </form>
    </div>
  );
};

export default EditArtifact;
