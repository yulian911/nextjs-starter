"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

type ActionResult = { error: string };

export async function signIn(_prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured" };

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };

  redirect("/");
}

export async function signUp(_prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();
  if (!supabase) return { error: "Supabase is not configured" };

  const { error } = await supabase.auth.signUp({ email, password });
  if (error) return { error: error.message };

  redirect("/auth/confirm-email");
}

export async function signOut(_formData: FormData): Promise<void> {
  const supabase = await createClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/");
}
