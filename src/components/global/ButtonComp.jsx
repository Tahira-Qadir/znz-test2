const ButtonComp = ({label, style}) => {
  function ButtonStyle() {
    if (style === "button-primary") {
      return "btn bg-blue-400 w-[120px] text-white";
    } 
    else {
      return "btn border-blue-400 w-[120px] text-blue-400";
    }
  }
   ButtonStyle();

  return <button className={ButtonStyle()}>{label}</button>;
};

export default ButtonComp;

