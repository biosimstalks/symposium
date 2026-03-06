import React from "react";
import Td from "./Td";
import "./Program.css";

const Program = () => {
  const initialTime = new Date();
  initialTime.setHours(9);
  initialTime.setMinutes(0);

  const activity = [
    { time: 15, activity: "Speakers arrive, registration" },
    { time: 15, activity: "Welcome by organizers" },
    {
      time: 40,
      activity:
        'Ariane Nunes Alves: "Combining τ-random accelerated molecular dynamics and machine learning to investigate protein-ligand dissociation in drug design and biotechnology"',
    },
    {
      time: 40,
      activity:
        'Ashutosh Srivastava: "Molecular simulations to understand circadian rhythms"',
    },
    { time: 60, activity: "Ice-breaker, speed networking" },
    { time: 90, activity: "Lunch break" },
    {
      time: 40,
      activity:
        'Tap Ha-duong: "Molecular simulations of polymer liquid-liquid phase separation: Applications to biomolecular condensates and drug nanocarriers"',
    },
    {
      time: 40,
      activity:
        'Ai Niitsu: "Design principles and structural dynamics of membrane peptides and proteins"',
    },
    { time: 15, activity: "Coffee Break" },
    {
      time: 40,
      activity:
        'Eiji Yamamoto: "Membrane as an Active Field: Multiscale Molecular Dynamics of Biological Membranes"',
    },
    {
      time: 40,
      activity:
        'Ignacia Echeverria Riesco: "Integrative modeling of compositional and conformationally heterogeneous protein assemblies"',
    },
    {
      time: 40,
      activity:
        'Chandra Verma: "Voyages in Molecular Design: Structural Modeling, Simulations, and Therapeutic Innovation"',
    },
    { time: 90, activity: "Poster session", shift: 5 },
    { time: 15, activity: "Poster prize, closing" },
    { time: 120, activity: "reception", shift: -75 },
  ];

  const listActivity = () => {
    const tr = [];
    let startTime = initialTime;
    for (let i = 0; i < activity.length; i++) {
      if ("shift" in activity[i]) {
        const shift = activity[i].shift ?? 0;
        startTime.setMinutes(startTime.getMinutes() + shift);
      }
      const endTime = new Date(startTime);
      endTime.setMinutes(startTime.getMinutes() + activity[i].time);
      const startTimeString = startTime.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const endTimeString = endTime.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      const classIndex = (i + 1) % 2;

      tr.push(
        <React.Fragment key={i}>
          <tr className={`Program-tr${classIndex}`}>
            <Td info="time">{`${startTimeString} - ${endTimeString}`}</Td>
            <Td info="info">{activity[i].activity}</Td>
          </tr>
        </React.Fragment>,
      );
      startTime = endTime;
    }
    return tr;
  };
  return (
    <>
      <table className="Program-table">
        <tbody>
          <tr className="Program-head">
            <Td info="time">Time</Td>
            <Td info="info">Activity</Td>
          </tr>
          {listActivity()}
        </tbody>
      </table>
    </>
  );
};

export default Program;
