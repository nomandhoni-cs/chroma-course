import ComingSoon from "../ComingSoon/ComingSoon";

const ComingSoonPage = ({ backgroundImg, pageName }) => {
  return (
    <div className="container mx-auto">
      <ComingSoon
        pageName={pageName}
        backgroundImg={backgroundImg}
        text="Coming Soon"
        highlitedWord="!"
      />
    </div>
  );
};

export default ComingSoonPage;
