import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [login, setIsLogIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
        const userData = {
          email : email,
          password : password
          
        };
        await axios
          .post("/users/login", userData)
          .then((res) => {
            console.log(res.data);
            alert("Logged In successfully");
            setIsLogIn(true);
           
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
  }
  if(login) {
    <Navigate to = "/add" />
  }
    
  

  return (
    <div
      style={{
        width: "30%",
        height: "300px",
        margin: "30px auto",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "20px",
      }}
    >
      <svg
        aria-hidden="true"
        className="native svg-icon iconLogoGlyphMd"
        width="32"
        height="37"
        viewBox="0 0 32 37"
      >
        <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
        <path
          d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
          fill="#F48024"
        ></path>
      </svg>
      <div className="form" style={{ display: "block", padding: "24px" }}>
        <input
          style={{ width: "250px", margin: "10px" }}
          type="text"
          placeholder="Enter your email"
          value={email} onChange ={(e) => {
            setEmail(e.target.value)
          }}
        />
        <br />
        <input
          style={{ width: "250px", margin: "10px" }}
          type="password"
          placeholder="Enter your password"
          value={password} onChange ={(e) => {
            setPassword(e.target.value)
          }}
        />
        <br />
        <button
          className="btn btn-outline"
          style={{
            width: "250px",
            margin: "10px",
            backgroundColor: "#0794f9",
            color: "white",
          }}
          onClick = {handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
