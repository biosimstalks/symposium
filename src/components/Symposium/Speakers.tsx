import React from "react";
import "./Content.css";
import "./Speakers.css";

const Speakers = () => {
  const speaker = [
    { name: "Ai Niitsu", homepage: "#", affiliation: "" },
    { name: "Ashutosh Srivastava", homepage: "#", affiliation: "" },
    { name: "Chandra Verma", homepage: "#", affiliation: "" },
    { name: "Eiji Yamamoto", homepage: "#", affiliation: "" },
    { name: "Tap Ha-duong", homepage: "#", affiliation: "" },
  ];

  const listSpeaker = () => {
    return speaker.map((item, index) => (
      <React.Fragment key={index}>
        <p className="Content-p Speakers-speaker">
          <strong>
            <a href={item.homepage}>{item.name}</a>
          </strong>
        </p>
        <br />
      </React.Fragment>
    ));
  };
  return (
    <>
      <p className="Content-p">
        <span style={{ color: "#5b5b5b", fontWeight: 600 }}>
          (in alphabetic order)
        </span>
      </p>
      <br />
      {listSpeaker()}
    </>
  );
};

export default Speakers;
