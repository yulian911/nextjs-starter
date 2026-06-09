import { Topbar } from "@/components/Topbar";

export function Welcome() {
  return (
    <div className="bg-cosmic relative min-h-screen w-full overflow-hidden">
      {/* Cosmic orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-24 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-2/3 -right-16 h-[250px] w-[250px] rounded-full bg-blue-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[140px]" />

      {/* Star field */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "200px 200px, 150px 150px, 100px 100px",
          backgroundPosition: "0 0, 40px 60px, 80px 30px",
        }}
      />

      <div className="relative z-10 p-4 sm:p-8">
        <Topbar />

        {/* Hero section */}
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:py-32 lg:py-40">
          <h1 className="mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-5xl leading-tight font-bold text-transparent sm:text-6xl lg:text-7xl">
            10x Next.js Starter
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-blue-100/70 sm:text-xl">
            A production-ready starter with authentication, modern tooling, and a cosmic developer experience.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/auth/signin"
              className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-purple-500"
            >
              Sign In
            </a>
            <a
              href="/auth/signup"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 pb-24 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4 text-purple-300"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <h3 className="mb-2 text-lg font-semibold text-white">Authentication Ready</h3>
            <p className="text-sm leading-relaxed text-blue-100/60">
              Built-in Supabase auth with sign in, sign up, and protected routes out of the box.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4 text-purple-300"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <h3 className="mb-2 text-lg font-semibold text-white">Modern Stack</h3>
            <p className="text-sm leading-relaxed text-blue-100/60">
              Next.js 15, React 19, Tailwind 4, and TypeScript — the latest tools, ready to go.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4 text-purple-300"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <h3 className="mb-2 text-lg font-semibold text-white">Developer Experience</h3>
            <p className="text-sm leading-relaxed text-blue-100/60">
              ESLint, Prettier, and pre-commit hooks keep your codebase clean from day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
