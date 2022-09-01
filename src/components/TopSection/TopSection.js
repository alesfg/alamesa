import React from "react";
import IconCart from "../IconCart/IconCart";
import SearchBar from "../SearchBar/SearchBar";
import Title from "../Title/Title";
import "./TopSection.css";

function TopSection({ title }) {
  return (
    <div>
      <div className="topsection">
        <Title title={title} style={{ color: "green" }} />
        <IconCart />
      </div>
      <SearchBar />
    </div>
  );
}

export default TopSection;
