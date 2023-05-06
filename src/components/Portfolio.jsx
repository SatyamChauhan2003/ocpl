import React from "react";
import Footer from "./Footer";

const data = [
  {
    id: 1,
    image: "foundation.webp",
    title: "OCPL Foundation",
    description:
      "Introducing a web-based platform that offers transparency, security, and efficiency in the charity donation process, ensuring that beneficiaries receive funds as intended. The OCPL Foundation leverages blockchain technology to tackle common issues in charitable giving. Experience a new era of trust and accountability in philanthropy with the OCPL Foundation - fostering positive change through transparent and secure charitable contributions. ",
    text1: "react",
    text2: "scss",
    text3: "bootstrap",
    link:"https://demo1.ocpl.tech/"
  },
  {
    id: 2,
    image: "healthcare.webp",
    title: "OCPL HealthCare",
    description:
      "Introducing OCPL Healthcare, an innovative blockchain-based solution transforming the healthcare industry. This cutting-edge platform enhances data security, streamlines patient records management, and ensures seamless data sharing among healthcare providers. It empowers patients, providers, and stakeholders with real-time access to critical health information, fostering improved decision-making. Experience the future of healthcare with OCPL Healthcare.",
    text1: "react",
    text2: "javascript",
    text3: "bootstrap",
    link:"https://demo2.ocpl.tech/"
  },
  {
    id: 3,
    image: "finance.webp",
    title: "OCPL Finance",
    description:
      "OCPL Finance, a blockchain-based solution, revolutionizes financial institutions' operations. Offering a secure, decentralized platform for seamless transactions, asset management, and cost reduction, OCPL Finance ensures data integrity and compliance. Ideal for banks, NBFCs, and other financial entities, it paves the way for enhanced efficiency, competitiveness, and growth in the ever-evolving financial landscape.",
    text1: "blockchain",
    text2: "css",
    text3: "bootstrap",
    link:"https://demo3.ocpl.tech/"
  },
  {
    id: 4,
    image: "crm.webp",
    title: "OCPL CRM Omega",
    description:
      " Experience the power of CRM Omega, a versatile platform for seamless contact management, sales automation, and robust reporting. Enhance team collaboration, automate workflows, and drive customer loyalty with tailored communication strategies. Unlock your business potential with CRM Omega - your partner for growth and success.",
    text1: "express",
    text2: "blockchain",
    text3: "redux",
    link:"https://demo4.ocpl.tech/"
  },
  {
    id: 5,
    image: "alpha.webp",
    title: "OCPL CRM Alpha",
    description:
      "Boost your customer relations with CRM Alpha, an intuitive, feature-rich solution that streamlines lead management, sales tracking, and customer support. Leverage AI-driven analytics for data-driven insights, personalized marketing campaigns, and improved customer satisfaction. Embrace CRM Alpha - the ultimate tool to elevate your business.",
    text1: "mui",
    text2: "blockchain",
    text3: "javascript",
    link:"https://demo7.ocpl.tech/"
  },
  {
    id: 6,
    image: "crypto.webp",
    title: "OCPL Gaming",
    description:
      " We use blockchain technology to provide a secure and transparent platform for buying, selling, and trading virtual assets. Each asset has a unique digital identity that is verified on the blockchain, making it impossible to duplicate or counterfeit.",
    text1: "react",
    text2: "blockchain",
    text3: "bootstrap",
    link:"https://demo6.ocpl.tech/"
  },
  {
    id: 7,
    image: "realstate.webp",
    title: " OCPL Real Estate",
    description:
      " Discover OCPL RealEstate, a pioneering solution that integrates blockchain technology into the real estate industry. OCPL RealEstate revolutionizes traditional processes, reduces transaction costs, and streamlines due diligence, fostering a seamless and trustworthy real estate ecosystem. Embrace the future of property transactions with OCPL RealEstate - your gateway to a smarter, more secure real estate experience.",
    text1: "react",
    text2: "blockchain",
    text3: "css",
    link:"https://demo5.ocpl.tech/"
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gray-900" >
      <div className=" px-28 py-11">
        <h3 className="text-gray-200">OUR</h3>
        <h2 className="font-bold text-white py-3 xl:text-6xl">Portfolio.</h2>
        <p className="text-white py-4 ">
          Blockchain technology isn't just a more efficient way to settle
          securities. It will fundamentally change market structures, and maybe
          even the architecture of the Internet itself. Whereas most
          technologies tend to automate workers on the periphery doing menial
          tasks, blockchains automate away the center. Instead of putting the
          taxi driver out of a job, blockchain puts Uber out of a job and lets
          the taxi drivers work with the customer directly.
        </p>
      </div>
      <div className="flex justify-evenly flex-wrap gap-5 items-center py-10 px-10">
        {data?.map((items, i) => (
          <div key={i}>
          <a href={items.link} style={{textDecoration:"none", cursor:"pointer"}}>
            <div className="w-80  rounded-xl bg-gray-800 my-5  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none " key={i}>
              <div className="w-full h-48 ">
                <img
                  className=" w-full h-full object-cover p-1 rounded-t-lg"
                  src={items.image}
                  width={100}
                  height={100}
                  placeholder="blur"
                  blurDataURL={items.image}
                  alt="Portfolio Demo"
                />
              </div>
              <div className="px-2 flex flex-col justify-evenly h-80 ">
                <h3 className="text-base font-bold text-white text-xl  ">
                  {items.title}
                </h3>
                <p className="text-sm text-white">{items.description}</p>
                <span><span className="font-bold text-blue-700 text-md">#{items.text1}</span>&nbsp;&nbsp;
                <span  className="font-bold text-green-700 text-md">#{items.text2}</span>&nbsp;&nbsp;
                <span  className="font-bold text-pink-500 text-md">#{items.text3}</span></span>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
