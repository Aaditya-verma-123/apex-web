export default function Grid() {
  return (
    <div
      className="
        absolute inset-0
        pointer-events-none
        opacity-[0.05]
        [background-image:
        linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
        [background-size:64px_64px]
        [mask-image:radial-gradient(circle_at_center,black,transparent_95%)]
      "
    />
  );
}