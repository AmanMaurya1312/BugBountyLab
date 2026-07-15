import {
  LayoutDashboard,
  Users,
  Briefcase,
  Wallet,
  FileText,
  Shield,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Employees", icon: Users },
  { name: "HR", icon: Briefcase },
  { name: "Finance", icon: Wallet },
  { name: "Reports", icon: FileText },
  { name: "Admin", icon: Shield },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold text-white">
          NexaHR
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Enterprise Platform
        </p>
      </div>

      <nav className="p-4">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="mb-2 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <Icon size={20} />

              {item.name}
            </button>
          );
        })}

      </nav>
    </aside>
  );
}