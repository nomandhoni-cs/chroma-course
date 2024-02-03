import "./ComingSoon.css";
const ComingSoon = ({ backgroundImg, text, pageName, highlitedWord }) => {
  return (
    <div className="coming-soon text-center">
      <h1 className="top-text">{pageName}</h1>
      <img src={backgroundImg} alt={text} />
      <h1 className="bottom-text">
        {text}<span className="highlited-word">{highlitedWord}</span>
      </h1>
    </div>
  );
};

export default ComingSoon;
