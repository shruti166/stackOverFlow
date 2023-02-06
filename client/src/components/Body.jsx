import React from "react";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div>
      <h2>Top Questions</h2>
      <Link to = "/add"><button>Ask Question</button></Link>
      <div className="allQuestion" style = {{display: "flex", flexDirection: "column"}}>
        <div className="q1" >
        <span style = {{color: "#0995FF", fontSize: "20px"}}>
          How to create a sticky notification in plain HTML CSS and JS?
        </span>
        <div>
          Hello everyone I need to create 3 different types of dialog boxes for
          school but the way it's worded I cannot find information online of how
          to do it. I need to create a sticky popup that is u intrusive to the
          screen that is untimed. And closed by clicking the x in the popup. I
          have a growl notification already that is timed. Now I don't even know
          what to look for as the internet has me going in circles the image I
          attached best explanation of nitication I need is the closest
          description of what I need to create. If anyone can point me in the
          right direction I would be very grateful. I tried searching on the
          internet. I have created a flash notification and can figure out an
          alert but "sticky" popup dialog box I cannot find. To be able to
          scroll and have an unintrusive, untimed, notification or dialog box as
          my school calls them this is the assignmentschool assignment.
        </div>
        <span>react</span>
        <span>frontened</span>
        </div>
      </div>
    </div>
  );
}
