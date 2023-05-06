import React, { useState } from "react";
import Lottie from "lottie-react";
import data from "./data.json";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    console.log(email, password);
    let item = { email, password };
    let result = fetch("http://91.203.132.6/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/");
  }
  return (
    <div>
      <section className="vh-100">
        <div className="container h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-4 col-sm-5 col-xs-1 col-lg-2 col-5 col-xl-4">
              <Lottie loop={true} animationData={data} />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-3 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-center">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign In
                  </p>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button submit"
                    onClick={login}
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <div className="align-items-center my-4 text-center">
                  <p className="text-center fw-bold mx-3 text-xl">Or</p>
                  <div className="items-center mx-12">
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
                </div>

                  <p className="small fw-bold mt-2 pt-1 mb-3">
                    Don't have an account?
                    <a href="signup" class="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
