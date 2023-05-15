import { BtnCustomizado } from "./styles";

const Btn = ({
  type,
  text,
  onClick,
  disabled,
}) => {
  return (  
    <BtnCustomizado
    type={type}
    text={text}
    onClick={onClick}
    disabled={disabled}
    >
      {text}
    </BtnCustomizado>
  );
}
 
export default Btn;