import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-red-100">
      <h1 className="text-5xl font-bold">Welcome to Siva online class</h1>
      <Link href="/dashboard" className="mt-6 border-2 border-gray-400 p-2 rounded-xl bg-blue-400 text-white">Go to Dashboard</Link>
    </div>
  );
}
