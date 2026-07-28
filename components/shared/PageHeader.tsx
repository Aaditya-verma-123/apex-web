type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl font-bold">{title}</h1>

      <p className="mt-4 text-lg text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}