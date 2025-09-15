type TSectionHeading = {
  title?: string;
  description?: string;
};

const SectionHeading = ({ title, description }: TSectionHeading) => {
  return (
    <div className="mx-auto max-w-4xl space-y-3 text-center">
      <h1 className="text-3xl font-bold lg:text-5xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeading;
