const Committee = () => {
  const committee = [
    "Sandhya P. Tiwari, IPR (chairperson)",
    "Ai Shinobu, WPI-PRIMe (vice-chairperson)",
    "Yichao Wu, WPI-PRIMe (website, abstracts, registration)",
    "Zi Wang, IPR (treasurer, event coordinator)",
    "Mika Uesaka, IPR (administrative support)",
  ];

  const listCommittee = () => {
    return committee.map((member, index) => (
      <li key={index} className="Content-p">
        {member}
      </li>
    ));
  };
  return <ul>{listCommittee()}</ul>;
};

export default Committee;
