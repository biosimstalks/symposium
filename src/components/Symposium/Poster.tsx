import "./Poster.css";
export default function Poster() {
  return (
    <>
      <p className="Poster-p">
        Posters should be no larger than A0 size (841 mm x 1189 mm).
      </p>
      {/* <div> */}
      <img alt="" className="Poster-img" src="A0_size.png" />
      {/* </div> */}
    </>
  );
}
