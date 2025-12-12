// import Td from "./Td";
import WelcomeMessage from "./WelcomeMessage";
import ContentNav from "./ContentNav";
import ContentMain from "./ContentMain";
import Speakers from "./Speakers";
import Registration from "./Registration";
import Program from "./Program";
import Access from "./Access";
import Committee from "./Committee";
import "./Content.css";

const Content = () => {
  const content = {
    "Welcome Message": <WelcomeMessage />,
    "Confirmed Invited Speakers": <Speakers />,
    Program: <Program />,
    Registration: <Registration />,
    "Abstract for posters": <></>,
    "Organizing Committee": <Committee />,
    Access: <Access />,
  };

  return (
    <div className="Content">
      <ContentNav content={Object.keys(content)} />
      <ContentMain content={content} />
    </div>
  );
};

export default Content;
