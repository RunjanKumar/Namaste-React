import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";


const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About </li>
          <li> Contact Us </li>
          <li> Cart </li>
          <li>
            {" "}
            <button
              className="login"
              onClick={() => {
                console.log("qqqqqqq", btnName);
                const value = btnName === "Login" ? "Logout" : "Login";
                console.log(value, "ssssssssss", btnName);
                setbtnName(value);
              }}
            >
              {" "}
              {btnName}{" "}
            </button>
          </li>
          {/* <li><img className="logo" src="https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg"/></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
