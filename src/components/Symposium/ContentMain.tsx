import "./ContentMain.css";
import ContentItem from "./ContentItem";
// import ContentTitle from "./ContentTitle";

type Props = {
  content: Record<string, React.ReactNode>;
};

const ContentMain = (props: Props) => {
  const listContent = () => {
    return Object.entries(props.content).map(([key, item]) => (
      <ContentItem key={key} info={item}>
        {key}
      </ContentItem>
    ));
  };
  return <div className="ContentMain">{listContent()}</div>;
};

export default ContentMain;
