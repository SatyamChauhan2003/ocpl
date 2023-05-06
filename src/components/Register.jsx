import React, { useState } from "react";
import Lottie from "lottie-react";
import development from "./development.json";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp(e) {
    e.preventDefault();
    let item = { name, email, phone, password };
    let result = await fetch("http://91.203.132.6/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/",{replace: true});
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  }
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-12 col-xl-10">
              <div
                className="card text-black"
                style={{
                  borderRadius: "25px",
                  marginTop: "25px",
                  marginBottom: "40px",
                }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 ">
                        Sign Up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              className="form-control"
                              required
                            />
                            <label className="form-label">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2 ">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              className="form-control"
                              required
                            />
                            <label className="form-label">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
                              className="form-control"
                              required
                            />
                            <label className="form-label">Phone</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              className="form-control"
                            />
                            <label className="form-label">Password</label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-2">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            I agree all statements in
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-2">
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            Already Have an account ? <a href="/login">LogIn</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                          <button
                            type="button submit"
                            className="btn btn-primary btn-lg"
                            onClick={signUp}
                          >
                            Register
                          </button>
                        </div>
                       <div className="mx-12">
                       <p className="text-center fw-bold mx-3 text-xl">Or</p>
                       <GoogleOAuthProvider clientId="1064132626463-r84lh521donep7akk1gjj754maukn2ej.apps.googleusercontent.com">
                       <GoogleLogin
                         onSuccess={(credentialResponse) => {
                           console.log(credentialResponse);
                         }}
                         onError={() => {
                           console.log("Login Failed");
                         }}
                       />
                     </GoogleOAuthProvider>
                       </div>
                      </form>
                    </div>
                    <div class="col-md-4 col-sm-6 col-5 col-lg-5 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <Lottie loop={true} animationData={development} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
