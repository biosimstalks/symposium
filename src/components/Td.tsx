type Props = {
  text: string;
};
const Td = ({ text }: Props) => {
  return <td style={{ padding: "0 8px" }}>{text}</td>;
};

export default Td;
