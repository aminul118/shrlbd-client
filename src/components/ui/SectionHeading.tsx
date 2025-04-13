type TSectionHeading = {
  title?: string;
  description?: string;
};

const SectionHeading = ({ title, description }: TSectionHeading) => {
  return (
    <div className="text-center max-w-4xl mx-auto space-y-3">
      <h1 className="text-3xl lg:text-5xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeading;
