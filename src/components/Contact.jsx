import React from "react";
import { Card, Container } from "react-bootstrap";
import Footer from "./Footer";

const Contact = () => {
  const data = {
    content: `If you don't innovate fast, disrupt your industry, disrupt yourself, you'll be left behind. We at OCPL is one of the most advanced tech companies using top framweorks to create your tech needs. Its just a matter of time when India will be the pioneer in Technology Advancement.At Ocpl Tech, we are a leading Blockchain Development Company dedicated to driving innovation for businesses in India and worldwide. Our talented team of experts skillfully leverages cutting-edge technology to create custom blockchain solutions and high-speed web, Android, and iOS applications. By partnering with us, you'll experience a powerful blend of dedication and advanced technology that simplifies processes and accelerates your business growth. Choose Ocpl Tech and embark on a journey toward remarkable success.`,
    details: [
      {
        image: "phone.jpeg",
        text1: "For Services Related Queries",
        text2: "+91-9555555801",
        text3: "ocpl.tech",
        link: "tel:+91-9555555801",
      },

      {
        image: "mail.jpeg",
        text1: "For Guest Blog Inquiries",
        text2: "info@ocpl.tech",
        text3: "ocpl.tech",
        link: "mailto:info@ocpl.tech",
      },
      {
        image: "maps.png",
        text1: "Our office",
        text2: "Karol Bagh, New Delhi",
        text3: "ocpl.tech",
        link:"ocpl.tech"
      },
    ],
  };

  return (
    <div>
      <div
        style={{
          padding: "20px",
          paddingBottom: "200px",
        }}
        className="bg-gray-800"
      >
        <Container style={{ color: "white", marginTop: "40px" }}>
          <h1 style={{ fontWeight: 800 }}>Contact Us</h1>
          <div className="flex justify-center">
            <p className="w-50 md:w-full">{data.content}</p>
          </div>
        </Container>
      </div>

      <div
        style={{
          marginTop: "-50px",
          paddingBottom: "150px",
        }}
        className="bg-gray-700"
      >
        <Container>
          <div className={"flex justify-evenly flex-wrap"}>
            {data.details?.map((item, i) => (
              <a
                href={item.link}
                style={{ color: "black", textDecoration: "none" }}
                target="_blank"
                key={i}
                rel="noreferrer"
              >
                <Card
                  style={{
                    width: "300px",
                    height: "250px",

                    border: `1px solid gray`,
                    marginTop: "-50px",
                  }}
                  key={i}
                  className=" flex flex-column flex-wrap justify-center sm:my-24 items-center"
                >
                  <div className="flex flex-column flex-wrap  justify-center items-center">
                    <div
                      style={{
                        backgroundColor: "white",
                        top: -30,
                        position: "absolute",
                        borderRadius: "50%",
                        width: "70px",
                        height: "70px",
                        border: `2px solid green`,
                      }}
                      className="flex m-auto flex-wrap  justify-center"
                    >
                      <img
                        src={item.image}
                        width={40}
                        height={8}
                        alt="careerfly"
                        className="rounded-xl py-2"
                      />
                    </div>
                  </div>
                  <div
                    style={{ marginTop: i === 3 ? "95px" : "60px" }}
                    className="text-center"
                  >
                    <div>{item.text1}</div>
                    <div style={{ fontSize: "25px" }}>
                      <b>{item.text2}</b>
                    </div>

                    {item.img ? (
                      <div className="mt-2 mb-2">
                        <img
                          src={item.img}
                          width={90}
                          height={90}
                          alt="qrcode"
                        />
                      </div>
                    ) : (
                      <div
                        className="mt-3 mb-2"
                        style={{ width: "90px", height: "90px" }}
                      ></div>
                    )}
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
