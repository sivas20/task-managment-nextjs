export default function profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-200 to-purple-400 p-10">
      <div className="flex flex-col justify-center items-center p-6 max-w-200 mx-auto rounded-xl shadow-xl bg-amber-50">
        <h1 className="text-2xl p-4 font-bold">Profile Settings</h1>
        <div className=" p-2 flex flex-col items-center justify-center">
          <h2 className="text-lg">Profile Picture</h2>
          <div className="max-w-40  mt-4">
            <img
              className="rounded-full h-40"
              src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Not Founded !"
            />
          </div>
          <div className="rounded-md bg-blue-500 text-white w-40 text-center mt-4 p-2">
            <button>Change Picture</button>
          </div>
          <div className="mt-6">
            <h3 className="text-lg mb-2 font-bold">Profile Information</h3>
            <div>
              <span className="text-md m-4">Full Name</span>
              <br />
              <input
                type="text"
                placeholder="siva"
                className="text-md m-2 w-100 border-2 border-indigo-100 p-2 rounded-xl"
              />
            </div>
            <div>
              <span className="text-md m-4">User Name</span>
              <br />
              <input
                type="text"
                placeholder="siva"
                className="text-md m-2 w-100 border-2 border-indigo-100 p-2 rounded-xl"
              />
            </div>
            <div>
              <span className="text-md m-4">Email Address</span>
              <br />
              <input
                type="text"
                placeholder="@gmail"
                className="text-lg m-2 w-100 border-2 border-indigo-100 p-2 rounded-xl"
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
