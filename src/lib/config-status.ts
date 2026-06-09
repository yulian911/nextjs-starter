interface ConfigItem {
  message: string;
  docsUrl?: string;
  docsLabel?: string;
}

function checkConfigs(): ConfigItem[] {
  const missing: ConfigItem[] = [];

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    missing.push({
      message: "Supabase nie jest skonfigurowany. Ustaw NEXT_PUBLIC_SUPABASE_URL i NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      docsUrl: "https://supabase.com/docs/guides/auth/server-side/nextjs",
      docsLabel: "Dokumentacja",
    });
  }

  return missing;
}

export const missingConfigs = checkConfigs();
