import React from "react";
import "./Footer.css"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        Portfolio PHAN THeo
                    </span>
                </div>
                <a
                    href="https://github.com/Aer-3888"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/th%C3%A9o-phan-b519aa251/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                    href="https://leetcode.com/user9816kT/"
                    target="_blank"
                    className="item5"
                >
                    <img src="/leetcode.svg"/>
                </a>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default Footer;