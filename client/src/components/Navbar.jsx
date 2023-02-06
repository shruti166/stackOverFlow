import React from "react";
import  {Link}  from "react-router-dom";

export default function Navbar() {
  return <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/2560px-Stack_Overflow_logo.svg.png" alt="" width = "150px" height= "30px"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href ="/">For Teams</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style = {{padding: 0, display: "flex", alignItems: "center", flexShrink: "10000", flexGrow: '1', width: "677px"}}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
       
      </form>
    </div>
  </div>
</nav>
  <Link to = "/signUp"><button className="btn btn-outline" style = {{margin: "20px auto"}}>New User ? Sign Up here</button></Link>
  
  <Link to = "/login"><button className="btn btn-outline">Have an account ? LogIn</button></Link>

  <Link to = "/add"><button className="btn btn-outline">Ask a Question</button></Link>
  </div>;
}
