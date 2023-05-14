import React from "react";
import ProfileImg from "../images/pp.jpg";
import "./styles/Header.css";

function Header() {
	return (
		<div className="bcard__header">
			<img className="bcard__profile-img" src={ProfileImg} alt="Sevda Keskin Profile" />
		</div>
	);
}

export default Header;