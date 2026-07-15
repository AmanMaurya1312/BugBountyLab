import { activities } from "../../data/dashboard";

export default function ActivityCard() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-xl font-semibold text-white">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-lg bg-slate-800 p-4 text-slate-300 transition hover:bg-slate-700"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}