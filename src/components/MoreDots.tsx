export default function MoreDots({ light }: { light?: boolean }) {
  return (
    <div className="flex gap-0.5">
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          light ? "bg-gray-100" : "bg-gray-500"
        }`}
      />
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          light ? "bg-gray-100" : "bg-gray-500"
        }`}
      />
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          light ? "bg-gray-100" : "bg-gray-500"
        }`}
      />
    </div>
  );
}
