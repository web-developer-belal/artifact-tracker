import ArtifactCard from "../components/artifact/ArtifactCard";
import Search from "../components/Search";
import SectionTitle from "../components/SectionTitle";

const AllArtifacts = () => {
  const artifacts = new Array(6).fill({
    artifactImage: "https://images.unsplash.com/photo-1490237014491-822aee911b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artifactName: "Sample Artifact",
    shortDescription: "This is a placeholder artifact.",
    likeCount: 0,
  });

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