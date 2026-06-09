import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/auth/actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;

  return (
    <div className="bg-cosmic flex min-h-screen items-center justify-center p-4">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-8 text-center text-white backdrop-blur-xl">
        <h1 className="mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-3xl font-bold text-transparent">
          Dashboard
        </h1>
        <p className="text-blue-100/80">
          Welcome, <span className="font-semibold text-white">{user?.email}</span>
        </p>
        <p className="mt-2 text-sm text-blue-100/50">This page is only for authenticated users.</p>
        <form action={signOut} className="mt-6">
          <button
            type="submit"
            className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm transition-colors hover:bg-white/20"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
