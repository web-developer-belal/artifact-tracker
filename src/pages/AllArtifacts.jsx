import { useLoaderData } from "react-router";
import ArtifactCard from "../components/artifact/ArtifactCard";
import Search from "../components/Search";
import SectionTitle from "../components/SectionTitle";

const AllArtifacts = () => {
  const artifacts = useLoaderData();

  return (
    <>
    <Search></Search>
    <SectionTitle title="All artifacts" center={true}></SectionTitle>
    <div className="px-4 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {artifacts.map((artifact, idx) => (
        <ArtifactCard key={idx} artifact={artifact} />
      ))}
    </div>
    </>
    
  );
};

export default AllArtifacts;