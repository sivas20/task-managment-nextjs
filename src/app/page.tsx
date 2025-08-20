import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-red-100">
      <h1 className="text-2xl font-bold">Welcome to The Dashboard App</h1>
      <p className="text-md mt-2">Manage your tasks, track analysis and stay organized with our powerful dashboard</p>
      <Link href="/dashboard" className="mt-6 text-md border-2 border-gray-400 p-2 rounded-xl bg-blue-400 text-white">Go to Dashboard</Link>
    </div>
  );
}
