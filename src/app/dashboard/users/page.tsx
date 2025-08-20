import Link from "next/link"
export default function user(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-200 to-purple-400 p-10">
            <div className="flex flex-col justify-center p-6 max-w-240 mx-auto rounded-xl shadow-xl bg-amber-50">
                <h1 className="text-2xl font-bold p-2">Users</h1>
                <p className="text-md p-2 mb-2">Manage your users here. you can view detailed information or browse a list of users.</p>
                <div className="flex">
                    <div className="p-2 rounded-xl h-40 w-110 bg-green-200 hover:bg-green-400 mr-4">
                        <Link href="/dashboard/users/detail">
                        <span className="text-lg p-4">User Details</span>
                        <p className="text-md p-4">View detailed information about each user in your system.</p>
                        </Link>
                    </div>
                    <div className="p-2 rounded-xl w-110 bg-orange-100 hover:bg-orange-300">
                        <Link href="/dashboard/users/details">
                        <span className="text-lg p-4">Users List</span>
                        <p className="text-md p-4">Browse and manage all users in the system.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}