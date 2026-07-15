import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

      <h1 className="text-center text-4xl font-bold text-white">
        NexaHR
      </h1>

      <p className="mb-8 mt-2 text-center text-slate-400">
        Enterprise HR Platform
      </p>

      <div className="space-y-5">

        <input
          placeholder="Email"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white outline-none focus:border-blue-500"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </button>

      </div>

    </div>
  );
}