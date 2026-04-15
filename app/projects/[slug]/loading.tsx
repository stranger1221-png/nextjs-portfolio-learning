export default function Loading() {
  return (
    <div className="flex h-64 items-center justify-center">
      <span className="animate-spin inline-block w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full"></span>
      <span className="ml-4 text-blue-600 font-semibold">Loading project details…</span>
    </div>
  );
}
