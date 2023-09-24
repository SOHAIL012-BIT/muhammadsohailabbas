import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <Tooltip title="Home" placement="top">
        <IconButton>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            {
              <AiOutlineHome
                className="navIcon"
                style={{ height: "2rem", width: "2rem" }}
              />
            }
          </a>
        </IconButton>
      </Tooltip>
      <Tooltip title="Who Am I" placement="top">
        <IconButton>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            {<AiOutlineUser style={{ height: "2rem", width: "2rem" }} />}
          </a>
        </IconButton>
      </Tooltip>
      <Tooltip title="Qualification and Work Experience" placement="top">
        <IconButton>
          <a
            href="#qualification"
            onClick={() => setActiveNav("#qualification")}
            className={activeNav === "#qualification" ? "active" : ""}
          >
            {<BiBook style={{ height: "2rem", width: "2rem" }} />}
          </a>
        </IconButton>
      </Tooltip>
      <Tooltip title="Services" placement="top">
        <IconButton>
          <a
            href="#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#services" ? "active" : ""}
          >
            {<MdDesignServices style={{ height: "2rem", width: "2rem" }} />}
          </a>
        </IconButton>
      </Tooltip>
      <Tooltip title="Get in touch" placement="top">
        <IconButton>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            {<BiMessageDetail style={{ height: "2rem", width: "2rem" }} />}
          </a>
        </IconButton>
      </Tooltip>
    </nav>
  );
};

export default Nav;
