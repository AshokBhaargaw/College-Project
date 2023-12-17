import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Container className="mt-5">
        <div className="m-auto border rounded p-5 w-50" style={{backgroundColor: "#F8F9FA"}}>
          <div className="col-md-9 mb-4 pb-2 m-auto ">
            <div className="form-outline">
              <label className="form-label" htmlFor="Username">
                Username:
              </label>
              <input
                type="text"
                id="Username"
                className="form-control form-control-lg"
              />
            </div>
          </div>
          <div className="col-md-9 mb-4 pb-2 m-auto">
            <div className="form-outline">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
              />
            </div>
          </div>

          <div className="mt-4 pt-2 col-md-9 m-auto">
            <input
              className="btn btn-primary btn-lg"
              type="submit"
              defaultValue="Submit"
            />
            <Link
              to={"/signup"}
              style={{
                marginLeft: 30,
                display: "inline",
                textDecoration: "none",
                color: "black",
              }}
              className="hoverUnderline"
            >
              Click here to Signup
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
