'use client';
import { useState } from 'react';

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <button className="px-4 py-2 bg-blue-500 rounded text-white" onClick={() => setN(n + 1)}>
      Count: {n}
    </button>
  );
}
