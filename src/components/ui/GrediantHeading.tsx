const GrediantHeading = ({ heading }: { heading: string }) => {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 text-center ">
        {heading}
      </h1>
    </>
  );
};

export default GrediantHeading;
