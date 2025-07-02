import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ArtifactCard from "../components/artifact/ArtifactCard";
import { Link, useLoaderData } from "react-router";
import { Helmet } from "react-helmet";
import { FaBook, FaGlobe, FaShieldAlt } from "react-icons/fa";

const sliders = [
  {
    image: "./images/stone.jpg",
    title: "Rosetta Stone",
    description:
      "The key to deciphering Egyptian hieroglyphs, discovered in 1799 and crucial to understanding ancient Egypt."
  },
  {
    image: "./images/army.jpg",
    title: "Terracotta Army",
    description:
      "Thousands of life-sized clay soldiers buried with China's first Emperor to protect him in the afterlife."
  },
  {
    image: "./images/slider-3.jpg",
    title: "Dead Sea Scrolls",
    description:
      "Ancient Jewish manuscripts found in the Qumran Caves, offering invaluable insights into early Judaism."
  },
  {
    image: "./images/mona-lisa.jpg",
    title: "Mona Lisa",
    description:
      "Leonardo da Vinci's world-famous portrait, celebrated for its enigmatic expression and artistic mastery."
  }
];

const infoCards = [
  {
    icon: <FaBook className="text-4xl text-primary" />,
    title: "Discover History",
    text: "Learn about the fascinating stories behind historical objects."
  },
  {
    icon: <FaGlobe className="text-4xl text-secondary" />,
    title: "Cultural Exchange",
    text: "Explore how ancient civilizations influenced each other."
  },
  {
    icon: <FaShieldAlt className="text-4xl text-accent" />,
    title: "Preserve Heritage",
    text: "Understand modern techniques used to safeguard the past."
  }
];

const contributors = [
  { name: "Alex Johnson", role: "Artifact Hunter", img: "./images/user-1.jpg" },
  { name: "Priya Singh", role: "History Enthusiast", img: "./images/user-2.jpg" },
  { name: "Chen Wei", role: "Research Scholar", img: "./images/user-3.jpg" },
  { name: "Maria Garcia", role: "Curator", img: "./images/user-4.jpg" }
];

const Home = () => {
  const artifacts = useLoaderData();

  return (
    <div className="px-4 space-y-12">
      <Helmet>
        <title>Artifacts tracker || Home page</title>
      </Helmet>

      <section>
        <Swiper
          className="!z-0"
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {sliders.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[60vh]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white rounded-xl">
                  <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                  <p className="max-w-lg text-center mb-4 px-4">{slide.description}</p>
                  <Link to="/all-artifacts" className="btn btn-primary">
                    Explore Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="grid md:grid-cols-3 gap-6 text-center">
        {infoCards.map((card, idx) => (
          <div key={idx} className="bg-base-100 shadow rounded-xl p-6 space-y-3 flex flex-col items-center justify-center">
            {card.icon}
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.text}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Featured Artifacts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact, index) => (
            <ArtifactCard key={index} artifact={artifact} />
          ))}
        </div>
      </section>

      <section className="bg-base-200 p-8 rounded-xl shadow flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">How It Works</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="inline-block w-6 h-6 bg-primary text-white rounded-full text-center font-bold">1</span>
              Browse and discover thousands of historical artifacts from around the world.
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-6 h-6 bg-primary text-white rounded-full text-center font-bold">2</span>
              Add your own discoveries and share their stories with the community.
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-6 h-6 bg-primary text-white rounded-full text-center font-bold">3</span>
              Like, comment, and save your favorite artifacts for easy access.
            </li>
          </ul>
        </div>
        <img
          src="./images/slider-1.jpg"
          alt="How it works"
          className="w-60 h-60 object-cover rounded-xl shadow-lg bg-white"
        />
      </section>

      <section className="bg-base-300 p-8 rounded-xl shadow">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Featured Contributors</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {contributors.map((contributor, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="avatar">
                <div className="w-20 rounded-full border-4 border-primary">
                  <img src={contributor.img} alt={contributor.name} />
                </div>
              </div>
              <span className="font-semibold text-base-content">{contributor.name}</span>
              <span className="text-xs text-neutral-content">{contributor.role}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
