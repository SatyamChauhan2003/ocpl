import React from "react";

const Work = () => {
  return (
    <div className="bg-gray-950  py-20">
      <h2 className="text-center text-white text-bold text-3xl">
        Kaleidoscope of Solutions
      </h2>
      <div className="flex flex-wrap justify-evenly py-10 wrapper">
        <div className="text-white box">CUSTOM BASED</div>
        <div className="text-white box">BLOCKCHAIN INTEGRATION</div>
        <div className="text-white box">7 DAYS</div>
      </div>

      <div>
        <div className="timeline">
          <div className="containerr left-container ">
            <img src="logo1.webp" alt="logo" width={50} />
            <div className="text-box">
              <h2>Requirement Gathering And Analysis</h2>

              <p className="font-bold">
                <li>
                  It involves identifying, analyzing, and documenting the needs
                  and objectives of the stakeholders and users, and transforming
                  them into a set of detailed requirements that the software
                  must meet.
                </li>
                <li>
                  Collaborating with cross-functional teams including designers,
                  product managers, and other developers to create high-quality
                  products.
                </li>
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="containerr right-container">
            <img src="logo2.webp" alt="logo" width={50} />
            <div className="text-box">
              <h2>Design</h2>

              <p className="font-bold">
                <li>
                  software requirements are analyzed and transformed into a
                  detailed system design document that outlines how the software
                  will be built.
                </li>
                <li>
                  software requirements are analyzed and transformed into a
                  detailed system design document that outlines how the software
                  will be built.
                </li>
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="containerr left-container">
            <img src="logo3.webp" alt="logo"  />
            <div className="text-box">
              <h2>Implementation</h2>

              <p className="font-bold">
                <li>
                  During this phase, the software is developed according to the
                  requirements and specifications defined by the client.
                </li>
                <li>
                  Then the actual code is written using a programming language
                  that is suitable for the project.
                </li>
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="containerr right-container">
            <img src="logo4.webp" alt="logo" width={100} />
            <div className="text-box">
              <h2>Testing</h2>

              <p className="font-bold">
                <li>
                  In this step, the test team identifies the scope of the
                  testing, the objectives, the types of tests that will be
                  performed, and the resources required for testing.
                </li>
                <li>
                  Then prepares a final report which includes the overall
                  quality of the software, the effectiveness of the testing
                  process, and any recommendations for improvement.
                </li>
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="containerr left-container">
            <img src="logo5.webp" alt="logo" width={50} />
            <div className="text-box">
              <h2>Deployment</h2>

              <p className="font-bold">
                <li>
                  The deployment phase is the final stage of the Software
                  Development Life Cycle (SDLC), where the software is released
                  for use by the end-users.
                </li>
                <li>
                  It involves deploying the software to the production
                  environment and making it available for use.
                </li>
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="containerr right-container">
            <img src="logo6.webp" alt="logo" width={70}/>
            <div className="text-box">
              <h2>Maintenance</h2>

              <p className="font-bold">
                <li>
                  The Maintenance phase is where the software is monitored,
                  updated, and improved after deployment.
                </li>
                <li>
                  It is a continuous process that aims to keep the software
                  functioning correctly, meet new user requirements, and fix any
                  issues that arise.
                </li>
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
