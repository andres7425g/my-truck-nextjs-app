'use client';
import TableContainer from '@/organisms/tableContainer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="w-full items-center font-mono">
        <TableContainer />
      </div>
    </main>
  );
}
