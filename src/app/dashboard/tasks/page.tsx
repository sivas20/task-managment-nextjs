export default function task() {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the client project",
      status: "In Progress",
      dueDate: "2025-02-18",
    },
    {
      id: 2,
      title: "Prepare presentation slides",
      description: "Create slides for the upcoming quarterly meeting",
      status: "Not Started",
      dueDate: "2025-02-20",
    },
    {
      id: 3,
      title: "Code review",
      description: "Review the pull requests from the development team",
      status: "In Progress",
      dueDate: "2025-02-22",
    },
    {
      id: 4,
      title: "Update documentation",
      description: "Update API documentation with new endpoints",
      status: "Completed",
      dueDate: "2025-02-15",
    },
    {
      id: 5,
      title: "Team feedback session",
      description: "Conduct a feedback session with the design team",
      status: "Not Started",
      dueDate: "2025-02-25",
    },
    {
      id: 6,
      title: "Deploy new version",
      description: "Deploy version 2.3.0 to production environment",
      status: "In Progress",
      dueDate: "2025-02-28",
    },
  ];
  return (
    <>
      <div className="flex justify-center bg-orange-200 h-full">
        <div className="flex-col bg-white h-fit p-4 m-8 rounded-xl shadow-lg shadow-white/50 ">
          <h1 className="text-2xl font-bold mt-8 mb-2">Tasks</h1>
          <div className="flex-row mt-4">
            <div className="p-2 rounded-xl w-3xl text-black mb-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`mb-4 flex justify-between shadow-lg p-6 rounded-lg ${
                    task.status === "Completed"
                      ? "shadow-green-500/30"
                      : task.status === "In Progress"
                      ? "shadow-yellow-500/30"
                      : "shadow-red-500/30"
                  }`}
                >
                  <div>
                    <h1 className="font-bold text-lg">{task.title}</h1>

                    <p>{task.description}</p>
                    <p>{task.dueDate}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p
                      className={`p-2 px-4 rounded-3xl m-2 w-fit ${
                        task.status === "Completed"
                          ? "text-green-500 bg-green-200"
                          : task.status === "In Progress"
                          ? "text-yellow-500 bg-yellow-200"
                          : "text-red-500 bg-red-200"
                      }`}
                    >
                      {task.status}
                    </p>
                    <span className="rounded-2xl bg-blue-200 text-blue-500 hover:bg-blue-500 hover:text-white p-3 mr-4">Edit</span>
                    {task.status !="Completed" && (
                      <span className="rounded-2xl p-2  mr-4 bg-green-500 text-white">Mark as Complete</span>
                    )  }
                    <span className="rounded-2xl bg-red-200 text-red-500 hover:bg-red-500 hover:text-white p-3 mr-4">delete</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
