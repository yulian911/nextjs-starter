import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/auth/actions";

export async function Topbar() {
  const supabase = await createClient();
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;

  return (
    <div className="mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
      {user ? (
        <>
          <span className="text-blue-100/70">{user.email}</span>
          <div className="flex items-center gap-3">
            <a href="/dashboard" className="text-purple-300 transition-colors hover:text-purple-100 hover:underline">
              Dashboard
            </a>
            <form action={signOut}>
              <button type="submit" className="text-purple-300 transition-colors hover:text-purple-100 hover:underline">
                Sign out
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <span className="text-blue-100/70">Not signed in</span>
          <div className="flex gap-3">
            <a href="/auth/signin" className="text-purple-300 transition-colors hover:text-purple-100 hover:underline">
              Sign in
            </a>
            <a href="/auth/signup" className="text-purple-300 transition-colors hover:text-purple-100 hover:underline">
              Sign up
            </a>
          </div>
        </>
      )}
    </div>
  );
}
