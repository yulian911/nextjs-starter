import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="bg-cosmic flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/10 p-8 text-white backdrop-blur-xl">
        <h1 className="mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-center text-2xl font-bold text-transparent">
          Sign in
        </h1>
        <SignInForm />
        <p className="mt-4 text-center text-sm text-blue-100/60">
          Don&apos;t have an account?{" "}
          <a href="/auth/signup" className="text-purple-300 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
