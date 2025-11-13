import "./Title.css";

type Props = {
  children: string;
};

const Title = (props: Props) => {
  return <div className="Title">{props.children}</div>;
};

export default Title;
