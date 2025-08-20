export default function analytics() {
  const data = [
    {
      title: "Total Sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    {
      title: "Active Users",
      value: "1,200",
      change: "-8%",
      isPositive: false,
    },
    {
      title: "Website Visits",
      value: "8,500",
      change: "+5%",
      isPositive: true,
    },
    {
      title: "New Sign-Ups",
      value: "350",
      change: "+18%",
      isPositive: true,
    },
  ];


  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-2xl font-bold mb-2">Analysis Dashboard</h1>
        <div className="flex mt-4">
          {data.map((p, i) => (
            <div
              key={i}
              className={`rounded-xl min-w-40 p-2 flex justify-between bg-amber-50 mr-4 mt-2 ${
                p.isPositive === true
                  ? " border-l-4 border-green-500"
                  : " border-l-4 border-red-500 "
              }`}
            >
              <div className="m-2">
                <h1 className="text-md">{p.title}</h1>
                <p>{p.value}</p>
              </div>

              <div className="flex justify-center items-center">
                <p className={`${p.isPositive ? "text-green-500" : "text-red-500"}`}>{p.change}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-amber-50 w-auto p-3">
          <h1 className="text-lg font-bold">Website Traffic</h1>
          <div className="bg-gray-100 text-md p-4 rounded-md w w-200 h-90 font-bold">
            Charts placeholder
          </div>
        </div>
         <div className="bg-amber-50 w-auto p-3">
          <h1 className="text-lg font-bold">Website Traffic</h1>
          <div className="bg-gray-100 text-md p-4 rounded-lg w w-200 h-90 font-bold">
            Charts placeholder
          </div>
        </div>
        <div className="bg-amber-50 w-auto p-3">
            <h1 className="text-lg font-bold">Recent Activities</h1>
           <div className="bg-gray-50 flex justify-between p-4 rounded-lg w-200 h-auto">
             <div>
                <h1 className="text-md font-bold">User Registrations</h1>
                <p>New User signed up on 2025-08-18</p>
            </div>
            <div className=" flex items-center justify-center">
                <p>+10 Users</p>
            </div>
           </div>
           <div className="mt-3 bg-gray-50 p-4 flex justify-between rounded-lg w-200 h-auto">
             <div >
                <h1 className="text-md font-bold">Sales Increases</h1>
                <p>Sales grew by 12% on 2025-08-18</p>
            </div>
             <div className=" flex items-center justify-center">
                <p>+10 Users</p>
            </div>
           </div>
        </div>
      </div>
    </>
  );
}
