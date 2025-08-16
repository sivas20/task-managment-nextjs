import Link from "next/link";

export default function dashboard() {
    return (
        <div className="flex justify-center bg-orange-200 h-screen">
            <div className="flex-col bg-white h-fit p-4 m-8 rounded-xl shadow-lg shadow-white/50 ">
                <h1 className="text-4xl font-bold mt-8 mb-2">Dashboard</h1>
                <p>This is our dashboard page</p>
                <div className="flex mt-4">
                    <div className="p-2 rounded-xl bg-red-200 hover:bg-red-400 text-black mr-4">
                        <Link href="/dashboard/tasks">
                            <h1 className="font-bold text-xl">Tasks</h1>
                            <p>Manage your Tasks</p>
                         </Link>
                    </div>
                    <div className="p-2 rounded-xl bg-indigo-100 hover:bg-indigo-300 text-black mr-4">
                        <Link href="/dashboard/analytics">
                            <h1 className="font-bold text-xl">Analytics</h1>
                            <p>View your insightes</p>
                        </Link>
                    </div>
                    <div className="p-2 rounded-xl bg-green-200 hover:bg-green-400 text-black ">
                        <Link href="/dashboard/settings">
                            <h1 className="font-bold text-xl">Settings</h1>
                            <p>Manage your account</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}