import React from "react";
import "./Content.css";
import "./Speakers.css";

const Speakers = () => {
  const speaker = [
    {
      name: "Ai Niitsu",
      homepage: "https://www.bdr.riken.jp/en/research/labs/niitsu-a/index.html",
      position: "Team Director",
      affiliation:
        "Laboratory for Dynamic Biomolecule Design, RIKEN Center for Integrated Medical Sciences (IMS), Yokohama, Japan",
    },
    {
      name: "Ashutosh Srivastava",
      homepage: "https://research.iitgn.ac.in/compbio/",
      position: "Assistant Professor",
      affiliation:
        "Biological Sciences and Engineering, IIT Gandhinagar, India",
    },
    {
      name: "Chandra Verma",
      homepage: "https://www.a-star.edu.sg/bii/research/bsmd/asdb",
      position: "Deputy Director (Research)",
      affiliation:
        "Senior Principal Scientist, Atomistic Simulations and Design in Biology, Bioinformatics Institute, A*STAR, Singapore",
    },
    {
      name: "Eiji Yamamoto",
      homepage: "https://yamamoto.sd.keio.ac.jp/",
      position: "Associate Professor",
      affiliation:
        "Department of System Design Engineering, Keio University, Tokyo, Japan",
    },
    {
      name: "Tap Ha-duong",
      homepage: "https://www.biocis.universite-paris-saclay.fr/?-HA-DUONG-Tap-",
      position: "Professor",
      affiliation:
        "Faculty of Pharmacy, Université Paris-Saclay, CNRS, BioCIS, France",
    },
    {
      name: "Ignacia Echeverria Riesco",
      homepage: "https://echeverria.ucsf.edu/",
      position: "Assistant Professor",
      affiliation:
        "Department of Bioengineering and Therapeutic Sciences, University of San Francisco California, United States",
    },
  ];

  const listSpeaker = () => {
    return speaker.map((item, index) => (
      <React.Fragment key={index}>
        <p className="Content-p">
          <strong>
            <a className="Speakers-speaker Content-large" href={item.homepage}>
              {item.name}
            </a>
          </strong>
        </p>
        <p className="Content-p Content-bold">{item.position}</p>
        <p className="Content-p">{item.affiliation}</p>
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
