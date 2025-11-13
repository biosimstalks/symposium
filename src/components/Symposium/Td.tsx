type Props = {
  children: string;
};
const Td = (props: Props) => {
  return <td style={{ padding: "0 8px" }}>{props.children}</td>;
};

export default Td;
