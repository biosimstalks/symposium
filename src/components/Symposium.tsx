import "./Symposium.css";
import Event from "./Symposium/Event";
import Content from "./Symposium/Content";

const Symposium = () => {
  return (
    <div className="Sym">
      <Event />
      <Content />
    </div>
  );
};

export default Symposium;
