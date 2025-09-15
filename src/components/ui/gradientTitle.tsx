interface GradientTitle {
  title?: string;
  description?: string;
}

const GradientTitle = ({ title, description }: GradientTitle) => {
  return (
    <section>
      <div className="mx-auto max-w-lg py-24 text-center">
        <h1 className="mb-5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
          {title}
        </h1>
        <p className="mb-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {description}
        </p>
      </div>
    </section>
  );
};

export default GradientTitle;
