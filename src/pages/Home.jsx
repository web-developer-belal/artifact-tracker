import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ArtifactCard from "../components/artifact/ArtifactCard";

const artifacts = [
  {
    artifactImage: "https://images.unsplash.com/photo-1600404261751-1c679e6b3f8d",
    artifactName: "Rosetta Stone",
    shortDescription: "Key to understanding Egyptian hieroglyphs.",
    likeCount: 25,
  },
  {
    artifactImage: "https://images.unsplash.com/photo-1611924653334-d518a50a4d9a",
    artifactName: "Antikythera Mechanism",
    shortDescription: "Ancient Greek analog computer.",
    likeCount: 30,
  },
  {
    artifactImage: "https://images.unsplash.com/photo-1608889175119-324d1bd60017",
    artifactName: "Dead Sea Scrolls",
    shortDescription: "Ancient Jewish religious manuscripts.",
    likeCount: 40,
  },
];

const Home = () => {
  return (
    <div className="px-4 space-y-10">
      <section>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {artifacts.map((artifact, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[350px]">
                <img
                  src={artifact.artifactImage}
                  alt={artifact.artifactName}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white rounded-xl">
                  <h2 className="text-3xl font-bold mb-2">{artifact.artifactName}</h2>
                  <p className="max-w-lg text-center mb-4 px-4">{artifact.shortDescription}</p>
                  <button className="btn btn-primary">Explore Now</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="bg-base-200 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Discover History</h2>
        <p>
          Dive into stories behind the greatest artifacts ever discovered and learn their
          significance across civilizations.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact, index) => (
          <ArtifactCard key={index} artifact={artifact} />
        ))}
      </section>

      <section className="bg-base-200 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
        <p>
          Join our community to contribute new findings, share insights, and like the most
          fascinating artifacts!
        </p>
      </section>
    </div>
  );
};

export default Home;
