import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">

      <div className="flex items-center gap-3 rounded-lg bg-slate-800 px-4 py-3">

        <Search size={18} />

        <input
          placeholder="Search..."
          className="bg-transparent text-white outline-none"
        />

      </div>

      <div className="flex items-center gap-5">

        <Bell className="text-slate-300" />

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            A
          </div>

          <div>

            <p className="font-semibold text-white">
              Aman
            </p>

            <p className="text-sm text-slate-400">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}