import user from "../page";

interface Activity {
  id: number;
  description: string;
  timestamp: string;
}

interface User {
  name: string;
  email: string;
  role: string; 
  status: string;
  bio: string;
  profilePicture: string;
  activities: Activity[];
}

export default function detail() {

  const data =
    {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      bio: "Admin responsible for managing user accounts and maintaining system security.",
      profilePicture: "https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      activities: [
        { id: 1, description: "Updated password", timestamp: "2025-02-10" },
        {
          id: 2,
          description: "Changed email address",
          timestamp: "2025-01-25",
        },
        {
          id: 3,
          description: "Logged in from a new device",
          timestamp: "2025-01-15",
        },
      ],
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-200 to-purple-400 p-10">
      <div className="flex flex-col p-6 max-w-300 mx-auto rounded-xl shadow-xl bg-amber-50">
        <div className="flex">
          <div className="max-w-40 mr-4 mt-4">
            <img
              className="rounded-full h-40"
              src={data.profilePicture}
              alt="Not Founded !"
            />
          </div>
          <div className="flex flex-col p-8">
            <span className="text-lg">{data.name}</span>
            <span className="text-md">{data.email}</span>
            <span className="text-md">{data.role}</span>
            <span className="text-md">Status: {data.status}</span>
          </div>
        </div>
        <div className="mt-6 p-2">
          <h1 className="text-lg font-bold">About</h1>
          <p className="text-md p-2">
           {data.bio}
          </p>
        </div>
        <div className="p-2 mt-2">
          <h1 className="text-lg font-bold">Recent Activities</h1>
          <ul className="space-y-4">
            {data.activities.map((g)=>(
                <li key={g.id} className="flex">
                    <div className=" rounded-3xl flex justify-center items-center m-2  w-12 bg-blue-500">
                        <span className="text-md h-fit w-fit  text-white ">A</span>
                    </div>
                    <div className=" p-2 text-md">
                        <p>{g.description}</p>
                        <p>{g.timestamp}</p>
                    </div>
                </li>
            ))}
          </ul>
        </div>
       
      </div>
    </div>
  );
}
