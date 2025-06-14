import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ArtifactCard from "../components/artifact/ArtifactCard";
import { Link, useLoaderData } from "react-router";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
  const artifacts = useLoaderData();
  const sliders = [
    {
      image: "./images/stone.jpg",
      title: "Rosetta Stone",
      description:
        "The key to deciphering Egyptian hieroglyphs, discovered in 1799 and crucial to understanding ancient Egypt.",
    },
    {
      image: "./images/army.jpg",
      title: "Terracotta Army",
      description:
        "Thousands of life-sized clay soldiers buried with China's first Emperor to protect him in the afterlife.",
    },
    {
      image: "./images/slider-3.jpg",
      title: "Dead Sea Scrolls",
      description:
        "Ancient Jewish manuscripts found in the Qumran Caves, offering invaluable insights into early Judaism.",
    },
    {
      image: "./images/mona-lisa.jpg",
      title: "Mona Lisa",
      description:
        "Leonardo da Vinci's world-famous portrait, celebrated for its enigmatic expression and artistic mastery.",
    },
  ];
  return (
    <div className="px-4 space-y-10">
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
              <div className="relative w-full h-[350px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white rounded-xl">
                  <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                  <p className="max-w-lg text-center mb-4 px-4">
                    {slide.description}
                  </p>
                  <Link to="/all-artifacts" className="btn btn-primary">
                    Explore Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="bg-base-200 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Discover History</h2>
        <p>
          Dive into stories behind the greatest artifacts ever discovered and
          learn their significance across civilizations.
        </p>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact, index) => (
          <ArtifactCard key={index} artifact={artifact} />
        ))}
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow flex flex-col md:flex-row items-center gap-8 my-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">
            How It Works
          </h2>
          <ul className="space-y-3 text-blue-800">
            <li className="flex items-center gap-2">
              <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center font-bold">
                1
              </span>
              Browse and discover thousands of historical artifacts from around
              the world.
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center font-bold">
                2
              </span>
              Add your own discoveries and share their stories with the
              community.
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center font-bold">
                3
              </span>
              Like, comment, and save your favorite artifacts for easy access.
            </li>
          </ul>
        </div>
        <img
          src="./images/slider-1.jpg"
          alt="How it works"
          className="w-60 h-60 object-contain rounded-xl shadow-lg bg-white"
        />
      </section>
      <section className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl shadow my-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-900 text-center">
          Featured Contributors
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="w-20 rounded-full border-4 border-green-300">
                <img src="./images/user-1.jpg" />
              </div>
            </div>
            <span className="font-semibold text-green-800">Alex Johnson</span>
            <span className="text-xs text-green-600">Artifact Hunter</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="w-20 rounded-full border-4 border-green-300">
                <img src="./images/user-2.jpg" />
              </div>
            </div>
            <span className="font-semibold text-green-800">Priya Singh</span>
            <span className="text-xs text-green-600">History Enthusiast</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="w-20 rounded-full border-4 border-green-300">
                <img src="./images/user-3.jpg" />
              </div>
            </div>
            <span className="font-semibold text-green-800">Chen Wei</span>
            <span className="text-xs text-green-600">Research Scholar</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="w-20 rounded-full border-4 border-green-300">
                <img src="./images/user-4.jpg" />
              </div>
            </div>
            <span className="font-semibold text-green-800">Maria Garcia</span>
            <span className="text-xs text-green-600">Curator</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
