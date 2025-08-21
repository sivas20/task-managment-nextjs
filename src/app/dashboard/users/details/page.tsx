"use client";
import { useEffect, useState } from "react";

interface UsersSchema {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function UsersPage() {
  const [users, setUsers] = useState<UsersSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const d = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: UsersSchema[] = await d.json();
        setUsers(data);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-200 to-purple-400 p-10">
      <h1>{loading ? "Loading..." : ""}</h1>
      {!loading && (
        <div className="rounded-xl w-200 p-4 bg-amber-50">
          <h1 className="text-2xl font-bold">Users List</h1>
          <table className="min-w-full border mt-3 border-gray-200 rounded-xl shadow-md">
            <thead>
              <tr className="bg-blue-500 text-white text-left">
                <th className="px-6 py-3 text-md font-semibold">Name</th>
                <th className="px-6 py-3 text-md font-semibold">Email</th>
                <th className="px-6 py-3 text-md font-semibold">Website</th>
                <th className="px-6 py-3 text-md font-semibold">Mobile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((d) => (
                <tr key={d.id} className="hover:bg-blue-100">
                  <td className="px-6 py-4 text-gray-900">{d.name}</td>
                  <td className="px-6 py-4 text-gray-700">{d.email}</td>
                  <td className="px-6 py-4 text-blue-600 underline">{d.website}</td>
                  <td className="px-6 py-4 text-gray-700">{d.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
