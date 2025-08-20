import Link from "next/link";

export default function dashboard() {
    return (
        <div className="flex justify-center bg-orange-200 h-screen">
            <div className="flex-col bg-white h-fit p-8 m-8 rounded-xl shadow-lg  shadow-white/50 ">
                <h1 className=" text-center text-2xl font-bold mt-8 mb-2">Dashboard</h1>
                <p className="text-center text-md"> This is our dashboard page</p>
                <div className="flex mt-4">
                    <div>
                        <div className="p-6 px-8 rounded-xl bg-red-200 hover:bg-red-500 hover:text-white text-black mr-4">
                        <Link href="/dashboard/tasks">
                            <h1 className="font-bold text-lg">Tasks</h1>
                            <p className="text-md">Manage your Tasks</p>
                         </Link>
                    </div>
                    <div className="p-6 px-8 rounded-xl bg-indigo-100 hover:bg-indigo-500 hover:text-white text-black mt-4 mr-4">
                        <Link href="/dashboard/analytics">
                            <h1 className="font-bold text-lg">Analytics</h1>
                            <p className="text-md">View your insightes</p>
                        </Link>
                    </div>
                    </div>
                   <div>
                     <div className="p-6 px-8 rounded-xl bg-green-200 hover:bg-green-500 hover:text-white text-black">
                        <Link href="/dashboard/settings">
                            <h1 className="font-bold text-lg">Settings</h1>
                            <p className="text-md">Manage your account</p>
                        </Link>
                    </div>
                    <div className="p-6 px-8 rounded-xl bg-yellow-200 hover:bg-yellow-500 hover:text-white text-black mt-4">
                        <Link href="/dashboard/users">
                            <h1 className="font-bold text-lg">Users</h1>
                            <p className="text-md">Manage your users</p>
                        </Link>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}