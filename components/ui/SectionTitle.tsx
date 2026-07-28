type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}