export default function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-grow min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <div className="flex gap-0.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-100"></span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-100"></span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-100"></span>
        </div>
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
}
