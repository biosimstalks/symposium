import "./Poster.css";
export default function Poster() {
  return (
    <>
      <p className="Poster-p">
        Posters should be no larger than A0 size (841 mm x 1189 mm).
      </p>
      <img
        height="700px"
        alt=""
        style={{ display: "block", margin: "0 auto" }}
        src="A0_size.png"
      />
    </>
  );
}
