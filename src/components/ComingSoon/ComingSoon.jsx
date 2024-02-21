const ComingSoon = ({ text, pageName, highlitedWord }) => {
  return (
    <div className="coming-soon container my-16 rounded-lg bg-light-tertiary dark:bg-dark-tertiary py-1 sm:py-4 px-8 flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl lg:text-9xl dark:text-gray-200 font-heading font-bold mb-6">
        {pageName}
      </h1>
      <h1 className="text-4xl py-5 lg:text-4xl font-semibold font-heading mb-4 text-light-primary dark:text-dark-primary">
        {text}
        <span className="text-light-primary dark:text-dark-primary">
          {highlitedWord}
        </span>
      </h1>
    </div>
  );
};

export default ComingSoon;
