import React from "react";
import { useState } from "react";
import axios from "axios";


export default function AddQuestion() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (title !== "" && body !== "") {
        const questData = {
          title: title,
          body: body,
          tag: tag,
          
        };
        await axios
          .post("/api/user/ques", questData)
          .then((res) => {
            console.log(res.data);
            alert("Question added successfully");
           
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
  

  return (
    <div>
      <h2>Ask a Question</h2>
      <div
        style={{
          width: "60%",
          margin: "30px auto",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "20px",
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Body
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Tags
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlInput1"
            value={tag}
            onChange={(e) => setTag(e.target.value)}/>
        </div>
        <button onClick = {handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
