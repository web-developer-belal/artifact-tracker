import { useLoaderData } from "react-router";
import ArtifactCard from "../components/artifact/ArtifactCard";
import Search from "../components/Search";
import SectionTitle from "../components/SectionTitle";
import axios from "axios";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const AllArtifacts = () => {
  const loaderArtifacts = useLoaderData();
  const [artifacts, setArtifacts] = useState(loaderArtifacts);
  const [loading, setLoading] = useState(false);

  const handelSearch = (searchValue) => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_URL}/all-artifacts`, {
        params: { search: searchValue },
      })
      .then((response) => {
        if (response.status === 200) {
          setArtifacts(response.data);
        } else {
          console.error("Error fetching artifacts:", response);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching artifacts:", error);
        setLoading(false);
      });
  };

  // If loader data changes (e.g. on navigation), update state
  useEffect(() => {
    setArtifacts(loaderArtifacts);
  }, [loaderArtifacts]);

  return (
    <>
    <Helmet>
        <title>All artifacts collections</title>
      </Helmet>
      <Search handelSearch={handelSearch} />
      <SectionTitle title="All artifacts" center={true} />
      {loading ? (
        <Loading />
      ) : artifacts.length === 0 ? (
        <p className="text-center text-gray-500">
          Don't have any artifacts yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact, idx) => (
            <ArtifactCard key={idx} artifact={artifact} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllArtifacts;