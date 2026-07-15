import DashboardLayout from "../layouts/DashboardLayout";

import StatCard from "../components/dashboard/StatCard";
import ActivityCard from "../components/dashboard/ActivityCard";
import EmployeeTable from "../components/dashboard/EmployeeTable";

import { stats } from "../data/dashboard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="mb-8 text-4xl font-bold text-white">
        Dashboard
      </h1>

      <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
          />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <EmployeeTable />
        </div>

        <ActivityCard />
      </div>
    </DashboardLayout>
  );
}