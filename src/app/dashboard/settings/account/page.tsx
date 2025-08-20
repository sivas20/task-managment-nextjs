export default function account() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-200 to-purple-400 p-10">
      <div className="flex flex-col justify-center items-center p-6 max-w-200 mx-auto rounded-xl shadow-xl bg-amber-50">
        <h1 className="text-2xl p-4 font-bold">Account Settings</h1>
        <div className=" p-6 flex flex-col items-center justify-center">
          <div className="mt-2">
            <h3 className="text-lg mb-2 font-bold">Profile Information</h3>
            <div>
              <span className="text-md m-4">Name</span>
              <br />
              <input
                type="text"
                placeholder="siva"
                className="text-md m-2 w-100 border-2 border-indigo-100 p-2 rounded-xl"
              />
            </div>
            <div>
              <span className="text-md m-4">Email</span>
              <br />
              <input
                type="text"
                placeholder="siva@gmail.com"
                className="text-md m-2 w-100 border-2 border-indigo-100 p-2 rounded-xl"
              />
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg mb-2 font-bold">Security</h3>
            <div>
              <span className="text-md m-4">Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter new password"
                className="text-md m-2 w-100 border-2 border-indigo-100 p-2 rounded-xl"
              />
            </div>
            <div>
              <span className="text-md m-4">Confirm Password</span>
              <br />
              <input
                type="text"
                placeholder="Confirm new password"
                className="text-md m-2 w-100 border-2 border-indigo-100 p-2 rounded-xl"
              />
            </div>
          </div>
          <div className="m-2 ml-auto">
            <button className="text-md rounded-xl p-2 mr-4 hover:bg-blue-200">
              Cancel
            </button>
            <button className="text-md rounded-xl w-20 text-white bg-indigo-300 p-2 hover:bg-indigo-500">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
