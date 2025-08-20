import Link from "next/link";
export default function settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-200 to-purple-500 p-10">
      <div className="flex flex-col p-8 bg-white rounded-lg shadow-2xl max-w-6xl mx-auto">
        <h1 className="font-bold text-2xl">Settings</h1>
        <p className="text-md max-w-2xl mt-2">
          Customize your account settings, Profile, and Notifications here.
          Choose an option from the sidebar to begin
        </p>
        <div className="mt-6 flex gap-8">
          <div className="w-1/3">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <div className="flex flex-col space-y-3">
              <Link href="/dashboard/settings/account">
                <p className="text-md w-50 hover:bg-indigo-100 hover:underline rounded-lg p-2">
                  Account
                </p>
              </Link>
              <Link href="/dashboard/settings/notifications">
                <p className="text-md w-50 hover:bg-orange-100 hover:underline rounded-lg p-2">
                  Notifications
                </p>
              </Link>
              <Link href="/dashboard/settings/profile">
                <p className="text-md w-50 hover:bg-green-100 hover:underline rounded-lg p-2">
                  Profile
                </p>
              </Link>
            </div>
          </div>
          <div className="flex-1 shadow-md p-6 rounded-lg bg-gray-50">
            <h2 className="font-bold text-lg mb-2">Select a Settings</h2>
            <p className="text-md">
              Choose an option from the sidebar to manage your account,
              notifications, or profile settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
