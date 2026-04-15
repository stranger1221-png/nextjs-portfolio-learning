'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <h2 className="text-red-600 font-bold text-xl mb-2">Something went wrong!</h2>
      <pre className="bg-red-100 p-4 rounded text-red-800">{error.message}</pre>
      <p className="mt-4">Please try again later or go back to the <a href="/projects" className="text-blue-600 underline">Projects</a> page.</p>
    </div>
  );
}