import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            College Attendance Management System
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            75 Core
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A simple attendance platform for students, faculty, and
            administrators. Track attendance, identify low-attendance students,
            and manage class records in one place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/login?role=student"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Student Login
            </Link>

            <Link
              href="/login?role=faculty"
              className="rounded-xl border border-cyan-300 px-6 py-3 text-center font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
            >
              Faculty Login
            </Link>

            <Link
              href="/login?role=admin"
              className="rounded-xl border border-slate-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              Admin Login
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-cyan-300">
              For Students
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              View your course-wise attendance percentage and understand your
              eligibility status early.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-cyan-300">
              For Faculty
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Mark attendance quickly, manage class sessions, and review
              attendance reports for assigned courses.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-cyan-300">
              For Administration
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Manage academic data and identify students who need attendance
              support before it becomes a problem.
            </p>
          </article>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          75 Core Prototype — Built for a smarter college attendance workflow.
        </p>
      </section>
    </main>
  );
}