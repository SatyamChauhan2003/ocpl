import React from "react";
import Footer from "./Footer";

const data = [
  {
    id: 1,
    image: "cloud.webp",
    service: "Cloud Computing Services",
  },
  {
    id: 2,
    image: "kubernetes.webp",
    service: "Kubernetes, Docker and Microservices",
  },
  {
    id: 3,
    image: "machine.webp",
    service: "AI and Machine Learning",
  },
  {
    id: 4,
    image: "edge.webp",
    service: "Edge Computing",
  },
  {
    id: 5,
    image: "edge.webp",
    service: "Internet of Things (IoT)",
  },
  {
    id: 6,
    image: "machine.webp",
    service: "Internet of Things (IoT)",
  },
  {
    id: 7,
    image: "kubernetes.webp",
    service: "Web and Mobile Development",
  },
  {
    id: 8,
    image: "cloud.webp",
    service: "DevSecOps",
  },
];

const About = () => {
  return (
    <div className="bg-gray-700">
      <div className=" xl:px-28 px-10  py-11">
        <h3 className="text-gray-200">INTRODUCTION</h3>
        <h2 className="font-bold text-white py-3 xl:text-6xl">OVERVIEW.</h2>
        <p className="text-white py-4 ">
          At Ocpl Tech, we are a leading Blockchain Development Company
          dedicated to driving innovation for businesses in India and worldwide.
          Our talented team of experts skillfully leverages cutting-edge
          technology to create custom blockchain solutions and high-speed web,
          Android, and iOS applications. By partnering with us, you'll
          experience a powerful blend of dedication and advanced technology that
          simplifies processes and accelerates your business growth. Choose Ocpl
          Tech and embark on a journey toward remarkable success.
        </p>
      </div>
      <div className="flex justify-evenly flex-wrap items-center py-10 px-10 ">
        {data?.map((items, i) => (
          <div key={i}>
            <div
              className="w-64 bg-gray-800 h-60 rounded-xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  my-5"
              key={i}
              style={{
                
                borderWidth: "3px",
                borderStyle: "solid",
                borderImage: " linear-gradient(#f6b73c, #4d9f0c) 30",
                cursor: "pointer",
              }}
            >
              <div className="w-full h-48 px-20 ">
                <img
                  className="object-cover rounded-t-lg py-7"
                  src={items.image}
                  width={60}
                  height={60}
                  placeholder="blur"
                  blurDataURL={items.image}
                  alt="services"
                />
                <h3 className=" font-bold text-white text-xl">
                  {items.service}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default About;
