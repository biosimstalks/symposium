type Props = {
  children: string;
  info: string;
};
const Td = (props: Props) => {
  return (
    <td
      style={{
        padding: "0 8px",
        whiteSpace: props.info === "time" ? "nowrap" : "normal",
      }}
    >
      {props.children}
    </td>
  );
};

export default Td;
