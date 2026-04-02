import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");
  console.log("header rendered");
  useEffect(()=>{
    console.log("Use Effect called");
  },[])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <div className="log-in-container">
            <button
              className="log-in"
              onClick={() => {
                btnNameReact === "login" ? setbtnNameReact("logout") : setbtnNameReact("login");
              }}
            >
              {btnNameReact}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
