const Button = ({ link, onClick, text, styleClass, icon }) => {
  return (
    <a
      href={link}
      onClick={onClick}
      className={`${styleClass} font-body rounded-lg px-5 py-2 cursor-pointer border-2 border-current hover:border-current`}
    >
      {icon} {text}
    </a>
  );
};

export default Button;
