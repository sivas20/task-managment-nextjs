export default function notifi() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-200 to-purple-400 p-10">
        <div className="flex flex-col justify-center p-4 max-w-200 mx-auto rounded-xl shadow-xl bg-amber-50">
          <h1 className="text-2xl p-4 font-bold text-center">Notifications</h1>
          <div className="p-4">
            <h2 className="text-lg font-bold">Notification preferences</h2>
            <div className="flex flex-col mt-2">
              <span className="text-md">Email notifications</span>
              <select
                name=""
                id=""
                className="rounded-lg border-2 text-md hover:bg-yellow-100 border-indigo-50 p-2"
              >
                <option value="">Enable</option>
                <option value="">Disable</option>
              </select>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-md">SMS notifications</span>
              <select
                name=""
                id=""
                className="rounded-lg border-2 text-md hover:bg-yellow-100 border-indigo-50 p-2"
              >
                <option value="">Enable</option>
                <option value="">Disable</option>
              </select>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-md">Push notifications</span>
              <select
                name=""
                id=""
                className="rounded-lg border-2 text-md hover:bg-yellow-100 border-indigo-50 p-2"
              >
                <option value="">Enable</option>
                <option value="">Disable</option>
              </select>
            </div>
          </div>
          <div className="ml-auto mr-8">
            <button className="text-md mr-2 rounded-2xl bg-amber-80 hover:bg-indigo-100 p-3">
              Cancel
            </button>
            <button className="text-md mr-2 rounded-2xl bg-orange-400 text-white hover:bg-yellow-300 hover:text-black p-3">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
