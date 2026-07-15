import { employees } from "../../data/dashboard";

export default function EmployeeTable() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Employees
        </h2>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
          View All
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800 text-left text-slate-400">
            <th className="pb-3">Name</th>
            <th className="pb-3">Department</th>
            <th className="pb-3">Role</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-b border-slate-800"
            >
              <td className="py-4 text-white">
                {employee.name}
              </td>

              <td className="text-slate-300">
                {employee.department}
              </td>

              <td className="text-slate-300">
                {employee.role}
              </td>

              <td>
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    employee.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {employee.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}