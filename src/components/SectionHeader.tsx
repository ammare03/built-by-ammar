export const SectionHeader = ({
  title,
  eyebrow,
  desc,
}: {
  title: string;
  eyebrow: string;
  desc: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
        {desc}
      </p>
    </>
  );
};
