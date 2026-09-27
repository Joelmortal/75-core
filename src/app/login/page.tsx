import Link from "next/link";

type LoginPageProps = {
  searchParams: Promise<{
    role?: string;
  }>;
};

export default async function LoginPage({
  searchParams,
}: LoginPageProps) {
  const params = await searchParams;

  const allowedRoles = ["student", "faculty", "admin"];

  const selectedRole = allowedRoles.includes(params.role ?? "")
    ? params.role!
    : "student";

  const roleName =
    selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center">
        <section className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-cyan-950/30">
          <Link
            href="/"
            className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            ← Back to 75 Core
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            75 Core
          </p>

          <h1 className="mt-3 text-3xl font-bold">{roleName} Login</h1>

          <p className="mt-3 text-slate-400">
            Sign in to access your 75 Core dashboard.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Prototype version — authentication will be added later.
          </p>
        </section>
      </div>
    </main>
  );
}