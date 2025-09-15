const GrediantHeading = ({ heading, ...props }: { heading: string }) => {
  return (
    <>
      <h1
        {...props}
        className="mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent"
      >
        {heading}
      </h1>
    </>
  );
};

export default GrediantHeading;
